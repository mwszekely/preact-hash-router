
import { usePassiveState, useStableCallback } from "preact-prop-helpers";
import { useEffect, useState } from "preact/hooks";
import { useUrl } from "./use-url";
import { parseParam, TypeMap, unparseParam } from "./util";


/**
 * Provides access to the requested Search Param's value
 * 
 * Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not syncronous, but that's
 * like most calls to `setState` anyway I guess?
 * 
 * @param paramKey The name of the URL search parameter to reference 
 * @param type The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged Will be called any time the requested Search Parameter's value changes.
 */
export function useSearchParams<T extends "string" | "boolean" | "number" | "bigint">(paramKey: string, type: T, onParamValueChanged?: (value: TypeMap[T] | null) => (void | (() => void))) {

    // We keep a local copy of our current Search Param value
    // because changing it is actually an asyncronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
   // const [getSavedParamValue, setSavedParamValue] = usePassiveState<TypeMap[T] | null>(onParamValueChanged);
    const [getPromise, setPromise] = usePassiveState<Promise<TypeMap[T]> | null>(null);
    const [getResolve, setResolve] = usePassiveState<null | ((value: TypeMap[T]) => void)>(null);
    const [getReject, setReject] = usePassiveState<null | ((ex: any) => void)>(null);
    
    const [getNextParamValue, setNextParamValue] = usePassiveState<TypeMap[T] | null>(null);
    const [getPreviousParamValue, setPreviousParamValue] = usePassiveState<TypeMap[T] | null>(null);
    //const savedParamValue = getSavedParamValue();

    const setParamWithHistory = useStableCallback((newParamValue: TypeMap[T] | null, reason?: "push" | "replace") => {

        let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
        unparseParam(newParams, paramKey, newParamValue as TypeMap[T], type);
        let nextUrl = new URL(window.location.toString());
        nextUrl.search = prettyPrintParams(newParams);
        history[`${reason ?? "replace"}State`]({}, document.title, nextUrl);
        setPreviousParamValue(getNextParamValue());
        setNextParamValue(newParamValue);

        // Changing the Search Params won't fire a hashchange event (I mean, obviously I guess, but)
        // so instead we need to forcibly have a popstate event fire, as the only one we can use here.
        //
        // We do that by just pushing another copy of our destination to the history stack
        // and immediatly returning to it.
        history.pushState({}, document.title, nextUrl);
        history.back();
        
        let promise = new Promise<TypeMap[T]>((resolve, reject) => { setResolve(() => resolve); setReject(() => reject); });
        setPromise(promise);
        return promise.then(() => { return newParamValue; });
    });


    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    useUrl(useStableCallback(url => {
        const newParam = parseParam(new URL(url), paramKey, type);
        const resolve = getResolve();
        const reject = getReject();

        if (newParam === getNextParamValue()) {
            resolve!(newParam!);
            setPreviousParamValue(null);
            setResolve(null);
            setReject(null);
            onParamValueChanged?.(newParam);
        }
        else if (newParam !== getPreviousParamValue()){
            reject!(newParam!);
            setPreviousParamValue(null);
            setResolve(null);
            setReject(null);
        }
    }));

    return [getNextParamValue(), setParamWithHistory] as const;
}

function prettyPrintParams(params: URLSearchParams) {
    const paramArray = [...params.entries()].filter((key, value) => value != null);
    if (paramArray.length == 0)
        return "";


    let queryString = paramArray.map(([key, value]) => {
        if (value === "" || (value as any) === true)
            return `${encodeURIComponent(key)}`;
        else
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");

    return `?${queryString}`;

}

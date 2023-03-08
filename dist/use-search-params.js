import { usePassiveState, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";
import { useUrl } from "./use-url.js";
import { parseParam, unparseParam } from "./util.js";
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
export function useSearchParams(paramKey, type, onParamValueChanged) {
    // We keep a local copy of our current Search Param value
    // because changing it is actually an asyncronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
    const [getSavedParamValue, setSavedParamValue] = usePassiveState(onParamValueChanged, useCallback(() => {
        return parseParam(new URL(window.location.toString()), paramKey, type);
    }, []));
    const setParamWithHistory = useStableCallback((newValueOrUpdater, reason) => {
        let prevValue = parseParam(new URL(window.location.toString()), paramKey, type);
        let nextValue = (typeof newValueOrUpdater == "function" ? newValueOrUpdater(prevValue) : newValueOrUpdater);
        let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
        unparseParam(newParams, paramKey, nextValue, type);
        let nextUrl = new URL(window.location.toString());
        nextUrl.search = prettyPrintParams(newParams);
        history[`${reason ?? "replace"}State`]({}, document.title, nextUrl);
        setSavedParamValue(nextValue);
    });
    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    useUrl(useStableCallback(url => {
        const newParam = parseParam(new URL(url), paramKey, type);
        setSavedParamValue(newParam);
    }));
    return [getSavedParamValue, setParamWithHistory];
}
function prettyPrintParams(params) {
    const paramArray = [...params.entries()].filter((key, value) => value != null);
    if (paramArray.length == 0)
        return "";
    let queryString = paramArray.map(([key, value]) => {
        if (value === "" || value === true)
            return `${encodeURIComponent(key)}`;
        else
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");
    return `?${queryString}`;
}
//# sourceMappingURL=use-search-params.js.map
import { ManagedChildInfo, UseManagedChildrenContext } from "preact-prop-helpers";


//export const RouterLevelContext = createContext(0);

/**
 * Internal helper to trim the crusts off of a hash path.
 * @param hash 
 * @returns 
 */
export function trimHash(hash: string) {
    if (hash.startsWith("#"))
        hash = hash.substr(1);
    if (hash.startsWith("/"))
        hash = hash.substr(1);
    if (hash.endsWith("/"))
        hash = hash.substr(0, hash.length - 1);
    return hash;
}

export function normalizeHashToPath(hash: string) {
    hash = trimHash(hash);
    return hash.split("/");
}

export interface TypeMap {
    "bigint": bigint;
    "number": number;
    "string": string;
    "boolean": boolean;
    "unknown": unknown;
}

// Not public -- just contains shared code for history modification.
// This is what actually changes History and updates the window's URL.
export function setEntireHash(hash: string, action: "push" | "replace") {
    action ??= "push";
    hash = trimHash(hash);
    let oldURL = window.location.toString();
    let nextUrl = new URL(window.location.toString());
    nextUrl.hash = `#${hash}`;

    history[`${action}State`]({}, document.title, nextUrl);

    // Modifying history doesn't actually cause a hashchange event.
    window.dispatchEvent(new HashChangeEvent('hashchange', { oldURL, newURL: nextUrl.toString() }));
}

/**
 * Modifies the given Search Params object to have its key be set to the given value.
 * 
 * Specifically for boolean types this ensures that the param is simply existant/non-existant,
 * but for other types this is pretty straightforward.
 * @param params 
 * @param key 
 * @param value 
 * @param type 
 */
export function unparseParam<T extends "string" | "boolean" | "number" | "bigint">(params: URLSearchParams, key: string, value: TypeMap[T], type: T) {
    if (type === "boolean") {
        if (value === true) {
            params.set(key, "");
        }
        else {
            params.delete(key);
        }
    }
    else {
        params.set(key, `${value}`);
    }
}

/**
 * Parses the requested Search Param from the given URL.
 * 
 * The type will be automatically parsed with special handling for booleans
 */
export function parseParam<T extends "string" | "boolean" | "number" | "bigint">(url: URL, key: string, type: T): TypeMap[T] | null {
    let value = url.searchParams.get(key);

    switch (type) {
        case "string":
            return (value as TypeMap[T]) ?? null;

        case "boolean":
            return (value != null) as TypeMap[T];

        case "number":
            if (value == null)
                return null;
            let parsed: number = +value;
            if (isFinite(parsed))
                return parsed as TypeMap[T];
            return null;

        case "bigint":
            if (value == null)
                return null;
            try {
                return BigInt(value) as TypeMap[T];
            }
            catch (ex) {
                return null;
            }
    }

    return value as TypeMap[T] ?? null;
}


export type RouterPathType = null | string | RegExp | ((localPath: string) => boolean);

export interface RouterControls {

    /**
     * Changes the current directory at the current level to `dir`.
     * 
     * * Directories on the side closer to the root are not affected.  
     * * Directories on the side farther from the root are deleted unless requested otherwise.
     */
    setLocalPath(dir: string, action?: "push" | "replace", keepTrailing?: boolean): void;

    /**
     * Go one level deeper into this directory by appending `/dir` to it.
     * 
     * * The current directory is not affected
     * * Directories on the side closer to the root are not affected.  
     * * Directories on the side farther from the root are deleted unless requested otherwise.
     */
    pushLocalPath(dir: string, action?: "push" | "replace", keepTrailing?: boolean): void;

    /**
     * Go back one level by setting the current directory to empty and, optionally, changing the parent directory to `dir` as well.
     * 
     * * The current directory is set to empty
     * * All directories after the current directory, if any, are emptied.
     * * If provided, the parent directory to the current directory is set to `dir`.
     * * Directories on the side closer to the root are not affected
     */
    popLocalPath(dir?: string, action?: "push" | "replace"): void;
}


export interface RouterChildInfo extends ManagedChildInfo<string> {
    setAnyMatchesAmongNonDefaultSiblings(anyMatches: boolean): void;
}


export interface RouterContextType extends UseManagedChildrenContext<RouterChildInfo> {
    routerContext: {
        // The current level the child should consider itself as--
        // children need this to know what part of the URL to parse
        // and also to inform *their* children what level they are
        level: number;

        /**
         * Used in order to facilitate showing the default child when no non-default children are being shown.
         * 
         * @param index 
         * @param matches 
         */
        notifyParentThatNonDefaultMatchHasChanged(index: string, matches: boolean | null): void;
    };
}

//export interface RouterChildInfo extends ManagedChildInfo<string> {
//    notifyOfSiblingsHaveNoMatches(noMatches: boolean): void;
    //path: RouterPathType | null;
//    matches: boolean | null;
//}

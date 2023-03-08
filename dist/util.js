//export const RouterLevelContext = createContext(0);
/**
 * Internal helper to trim the crusts off of a hash path.
 * @param hash
 * @returns
 */
export function trimHash(hash) {
    if (hash.startsWith("#"))
        hash = hash.substr(1);
    if (hash.startsWith("/"))
        hash = hash.substr(1);
    if (hash.endsWith("/"))
        hash = hash.substr(0, hash.length - 1);
    return hash;
}
export function normalizeHashToPath(hash) {
    hash = trimHash(hash);
    return hash.split("/");
}
// Not public -- just contains shared code for history modification.
// This is what actually changes History and updates the window's URL.
export function setEntireHash(hash, action) {
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
export function unparseParam(params, key, value, type) {
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
export function parseParam(url, key, type) {
    let value = url.searchParams.get(key);
    switch (type) {
        case "string":
            return value ?? null;
        case "boolean":
            return (value != null);
        case "number":
            if (value == null)
                return null;
            let parsed = +value;
            if (isFinite(parsed))
                return parsed;
            return null;
        case "bigint":
            if (value == null)
                return null;
            try {
                return BigInt(value);
            }
            catch (ex) {
                return null;
            }
    }
    return value ?? null;
}
//export interface RouterChildInfo extends ManagedChildInfo<string> {
//    notifyOfSiblingsHaveNoMatches(noMatches: boolean): void;
//path: RouterPathType | null;
//    matches: boolean | null;
//}
//# sourceMappingURL=util.js.map
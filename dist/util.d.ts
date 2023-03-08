import { ManagedChildInfo, UseManagedChildrenContext } from "preact-prop-helpers";
/**
 * Internal helper to trim the crusts off of a hash path.
 * @param hash
 * @returns
 */
export declare function trimHash(hash: string): string;
export declare function normalizeHashToPath(hash: string): string[];
export interface TypeMap {
    "bigint": bigint;
    "number": number;
    "string": string;
    "boolean": boolean;
    "unknown": unknown;
}
export declare function setEntireHash(hash: string, action: "push" | "replace"): void;
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
export declare function unparseParam<T extends "string" | "boolean" | "number" | "bigint">(params: URLSearchParams, key: string, value: TypeMap[T], type: T): void;
/**
 * Parses the requested Search Param from the given URL.
 *
 * The type will be automatically parsed with special handling for booleans
 */
export declare function parseParam<T extends "string" | "boolean" | "number" | "bigint">(url: URL, key: string, type: T): TypeMap[T] | null;
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
//# sourceMappingURL=util.d.ts.map
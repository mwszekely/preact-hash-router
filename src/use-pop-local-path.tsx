import { useCallback } from "preact/hooks";
import { normalizeHashToPath, trimHash, useSetEntireHash } from "./util";

/**
 * Removes the directory at the current level, effectively returning
 * to the previous level.  You can also switch to a different
 * previous level if you would like.
 */
export function usePopLocalPath(level: number) {
    const setEntireHash = useSetEntireHash();

    return useCallback(function popLocalHash(dir?: string, action: "push" | "replace" = "push") {
        const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
        let newHashPath = oldHashPath.slice(0, level).map(s => (s ?? ""));
        if (dir) {
            dir = trimHash(dir);
            newHashPath[newHashPath.length - 1] = dir;
        }

        setEntireHash(newHashPath.join("/"), action);
    }, [level]);
}

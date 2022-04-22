import { useCallback } from "preact/hooks";
import { normalizeHashToPath, trimHash, useSetEntireHash } from "./util";

/**
 * Replaces the directory at the current level with a new one. You can
 * choose whether or not any trailing paths are kept -- by default this is false.
 * @returns
 */
export function useSetLocalPath(level: number) {
    const setEntireHash = useSetEntireHash();

    return useCallback(function setLocalHash(dir: string, action: "push" | "replace" = "push", keepTrailing?: boolean) {
        dir = trimHash(dir);
        const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
        let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => (s ?? ""));
        newHashPath.splice(level, 1, dir);
        setEntireHash(newHashPath.join("/"), action);
    }, [level]);
}

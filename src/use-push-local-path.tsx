import { useCallback } from "preact/hooks";
import { RootRouterError } from "./root-router-error";
import { normalizeHashToPath, trimHash, setEntireHash } from "./util";

/**
 * Adds a directory at one level deeper.
 */
export function usePushLocalPath(level: number) {

    return useCallback(function pushLocalHash(dir: string, action: "push" | "replace" = "push", keepTrailing?: boolean) {
        dir = trimHash(dir);
        const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
        let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => (s ?? ""));
        newHashPath.splice(level + 1, 1, dir);
        setEntireHash(newHashPath.join("/"), action);
    }, [level]);
}

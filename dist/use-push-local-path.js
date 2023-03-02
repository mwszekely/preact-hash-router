import { useCallback } from "preact/hooks";
import { normalizeHashToPath, setEntireHash, trimHash } from "./util.js";
/**
 * Adds a directory at one level deeper.
 */
export function usePushLocalPath(level) {
    return useCallback(function pushLocalHash(dir, action = "push", keepTrailing) {
        dir = trimHash(dir);
        const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
        let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => (s ?? ""));
        newHashPath.splice(level + 1, 1, dir);
        setEntireHash(newHashPath.join("/"), action);
    }, [level]);
}
//# sourceMappingURL=use-push-local-path.js.map
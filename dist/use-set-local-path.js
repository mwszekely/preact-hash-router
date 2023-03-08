import { useCallback } from "preact/hooks";
import { RootRouterError } from "./root-router-error.js";
import { normalizeHashToPath, setEntireHash, trimHash } from "./util.js";
/**
 * Replaces the directory at the current level with a new one. You can
 * choose whether or not any trailing paths are kept -- by default this is false.
 * @returns
 */
export function useSetLocalPath(level) {
    return useCallback(function (dir, action = "push", keepTrailing) {
        setEntireHash(setLocalPath(level, dir, keepTrailing || false), action);
    }, [level]);
}
function setLocalPath(level, dir, keepTrailing) {
    if (level < 0)
        throw new RootRouterError();
    dir = trimHash(dir);
    const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
    let newHashPath = oldHashPath.slice(0, keepTrailing ? undefined : level + 1).map(s => (s ?? ""));
    newHashPath.splice(level, 1, dir);
    return newHashPath.join("/");
}
//# sourceMappingURL=use-set-local-path.js.map
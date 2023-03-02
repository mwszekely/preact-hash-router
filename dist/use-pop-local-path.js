import { useCallback } from "preact/hooks";
import { RootRouterError } from "./root-router-error.js";
import { normalizeHashToPath, setEntireHash, trimHash } from "./util.js";
/**
 * Removes the directory at the current level, effectively returning
 * to the previous level.  You can also switch to a different
 * previous level if you would like.
 */
export function usePopLocalPath(level) {
    return useCallback(function (dir, action = "push") {
        setEntireHash(popLocalPath(level, dir), action);
    }, [level]);
}
export function popLocalPath(level, dir) {
    if (level < 0)
        throw new RootRouterError();
    const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
    let newHashPath = oldHashPath.slice(0, level).map(s => (s ?? ""));
    if (dir) {
        dir = trimHash(dir);
        newHashPath[newHashPath.length - 1] = dir;
    }
    return newHashPath.join("/");
}
//# sourceMappingURL=use-pop-local-path.js.map
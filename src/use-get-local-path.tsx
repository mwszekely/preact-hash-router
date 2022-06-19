import { useStableCallback } from "preact-prop-helpers";
import { useEnsureStability, usePassiveState } from "preact-prop-helpers/use-passive-state";
import { RootRouterError } from "./root-router-error";
import { useUrl } from "./use-url";
import { normalizeHashToPath, trimHash } from "./util";

/**
 * Returns a function that can be used to retrieve the local path at this level after rendering has completed.
 * 
 * In addition, `onLocalPathChange` can be used to monitor changes (to `setState`, for example).
 * 
 * @param level 
 * @param onLocalPathChange 
 * @returns 
 */
export function useGetLocalPath(level: number, onLocalPathChange: null | undefined | ((localPath: string | null) => (void | (() => void)))) {

    useEnsureStability("useGetLocalPath", onLocalPathChange);

    // We don't actually re-render ourselves necessarily
    // whenever the local path changes. We only fire
    // a callback, which we *might choose to* re-render on.
    // Therefore, we just keep passive state that we never
    // actually inspect, and just use for its onChange-like qualities.
    const [, setLocalCopy] = usePassiveState<string | null>(onLocalPathChange);

    // Any time the URL changes, inspect the hash
    // at our current level, and change our local copy of our path
    // in our passive state. This will trigger our callback if they're different.
    useUrl(useStableCallback(url => {
        const oldHashPath = normalizeHashToPath(trimHash(new URL(url).hash));
        setLocalCopy(oldHashPath[level]);
    }));

    return useStableCallback(function getLocalPath() {
        if (level < 0)
            throw new RootRouterError();
        const oldHashPath = normalizeHashToPath(trimHash(new URL(window.location.toString()).hash));
        return oldHashPath[level];
    });
}

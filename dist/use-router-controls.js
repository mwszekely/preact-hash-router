import { useMemo } from "preact/hooks";
import { usePopLocalPath } from "./use-pop-local-path.js";
import { usePushLocalPath } from "./use-push-local-path.js";
import { useSetLocalPath } from "./use-set-local-path.js";
/**
 * Allows easy access to the controls at the current level.
 *
 * You can also get this information from a child <Router />
 * by passing in a ref (e.g. <Router ref={setControls} />).
 */
export function useRouterControls(level) {
    // This is the hash at this level specifically, 
    // so it contains no directory separators.
    const popLocalPath = usePopLocalPath(level);
    const pushLocalPath = usePushLocalPath(level);
    const setLocalPath = useSetLocalPath(level);
    return useMemo(() => ({
        popLocalPath,
        pushLocalPath,
        setLocalPath,
    }), [popLocalPath, pushLocalPath, setLocalPath]);
}
//# sourceMappingURL=use-router-controls.js.map
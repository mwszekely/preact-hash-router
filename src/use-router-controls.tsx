import { useEnsureStability } from "preact-prop-helpers/use-passive-state";
import { useContext, useMemo } from "preact/hooks";
import { useLocalPath } from "./use-local-path";
import { usePopLocalPath } from "./use-pop-local-path";
import { usePushLocalPath } from "./use-push-local-path";
import { RouterContext } from "./use-router-provider";
import { useSetLocalPath } from "./use-set-local-path";
import { RouterControls } from "./util";



/**
 * Allows easy access to the controls at the current level.
 * 
 * You can also get this information from a child <Router />
 * by passing in a ref (e.g. <Router ref={setControls} />).
 */
export function useRouterControls({ onPathChange }: { onPathChange: null | ((path: string | null) => void) }): RouterControls {
    const { level, matchChangeHandler, useRouterChild } = useContext(RouterContext)!;

    // This is the hash at this level specifically, 
    // so it contains no directory separators.
    const popLocalPath = usePopLocalPath(level);
    const pushLocalPath = usePushLocalPath(level);

    useEnsureStability("useRouterControls", onPathChange);
    const [getLocalPath, setLocalPath] = useLocalPath(level, onPathChange);

    return useMemo(() => ({
        getLocalPath,
        popLocalPath,
        pushLocalPath,
        setLocalPath,
        level
    }), [level, getLocalPath, popLocalPath, pushLocalPath, setLocalPath]);
}



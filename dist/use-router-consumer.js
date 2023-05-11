import { useEnsureStability, useManagedChild, usePassiveState, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { useUrl } from "./use-url.js";
import { normalizeHashToPath, trimHash } from "./util.js";
export function useConsumeRouter({ context, info: { index }, consumeRouterParameters: { onLocalPathChange, localPath: wantedLocalPath } }) {
    const { routerContext: { level, notifyParentThatNonDefaultMatchHasChanged } } = context;
    const [anyMatchesAmongNonDefaultSiblings, setAnyMatchesAmongNonDefaultSiblings] = useState(null);
    const [pathWhenMatching, setPathWhenMatching] = useState(null);
    const { managedChildReturn } = useManagedChild({
        context,
        info: {
            index,
            setAnyMatchesAmongNonDefaultSiblings: useStableCallback((anyMatches) => {
                setAnyMatchesAmongNonDefaultSiblings(anyMatches);
                onLocalPathChange2(wantedLocalPath, anyMatches, getLocalPath());
            })
        }
    });
    useLayoutEffect(() => {
        onLocalPathChange2(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, getLocalPath());
    }, [wantedLocalPath, anyMatchesAmongNonDefaultSiblings]);
    const onLocalPathChange2 = useStableCallback(function (wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path) {
        const matches = pathCompare(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path);
        setMatches(matches);
        console.log(`${index}: onLocalPathChange2(wlp: ${(wantedLocalPath ?? "null").toString()}, amands: ${(anyMatchesAmongNonDefaultSiblings ?? "null").toString()}, p: ${path}): ${(matches ?? "null").toString()}`);
        if (matches)
            setPathWhenMatching(path);
        if (wantedLocalPath != null) {
            notifyParentThatNonDefaultMatchHasChanged(index, matches);
        }
        else {
            notifyParentThatNonDefaultMatchHasChanged(index, null);
        }
    });
    const [matches, setMatches] = useState(null);
    const [getLocalPath, setLocalPath] = useLocalPath({
        consumeRouterReturn: { level },
        localRouteParameters: {
            onLocalPathChange: useStableCallback((path, prev, reason) => {
                onLocalPathChange2(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path);
                onLocalPathChange?.(path, prev, reason);
            })
        }
    });
    return {
        managedChildReturn,
        consumeRouterReturn: {
            level,
            matches,
            getLocalPath,
            setLocalPath,
            pathWhenMatching
        }
    };
}
function useLocalPath({ consumeRouterReturn: { level }, localRouteParameters: { onLocalPathChange } }) {
    useEnsureStability("useLocalPath", level);
    const urlToPath = useCallback((url) => {
        const oldHashPath = normalizeHashToPath(trimHash(new URL(url).hash));
        return oldHashPath[level];
    }, []);
    const [getLocalPath, setLocalPath] = usePassiveState(useStableCallback(onLocalPathChange), useCallback(() => {
        return urlToPath(window.location.href);
    }, [urlToPath]));
    // Any time the URL changes, inspect the hash
    // at our current level, and change our local copy of our path
    // in our passive state. This will trigger our callback if they're different.
    useUrl(url => { setLocalPath(urlToPath(url)); });
    return [getLocalPath, setLocalPath];
}
export function pathCompare(requestedLocalHash, anyMatchesAmongNonDefaultSiblings, localPath) {
    let matches;
    localPath ??= "";
    if (requestedLocalHash instanceof RegExp)
        matches = (requestedLocalHash.test(localPath));
    else if (requestedLocalHash instanceof Function)
        matches = (requestedLocalHash(localPath));
    else if (requestedLocalHash == null)
        matches = (anyMatchesAmongNonDefaultSiblings == null ? null : !anyMatchesAmongNonDefaultSiblings);
    else
        matches = (requestedLocalHash === localPath);
    return matches;
}
//# sourceMappingURL=use-router-consumer.js.map
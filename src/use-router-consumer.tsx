import { OnPassiveStateChange, useEnsureStability, useManagedChild, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildReturnType, usePassiveState, useStableCallback, useState } from "preact-prop-helpers";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { useUrl } from "./use-url";
import { normalizeHashToPath, RouterChildInfo, RouterPathType, trimHash } from "./util";


export interface UseLocalPathParameters {
    consumeRouterReturn: Pick<UseConsumeRouterReturn["consumeRouterReturn"], "level">;
    localRouteParameters: {
        onLocalPathChange: OnPassiveStateChange<string, never>;
    }
}

export interface RouterContextType extends UseManagedChildrenContext<RouterChildInfo> {
    routerContext: {
        level: number;
        notifyParentThatNonDefaultMatchHasChanged(index: string, matches: boolean | null): void;
    };
}




export interface UseRouterConsumerArguments {
    routerConsumerParameters: { localPath: RouterPathType | null; }
}

/**
 * The "child" part of a router.
 * 
 * This is responsible for observing the current directory in the hash,
 * and notifying the parent any time it becomes valid/invalid, because
 * if this path and all its siblings are invalid at the same time,
 * the default path is allowed to be shown.
 */




export interface UseConsumeRouterParameters extends UseManagedChildParameters<RouterChildInfo> {
    context: RouterContextType;
    consumeRouterParameters: {
        onLocalPathChange?: null | undefined | OnPassiveStateChange<string, never>;
        localPath: RouterPathType;
    }
}

export interface UseConsumeRouterReturn extends UseManagedChildReturnType<RouterChildInfo> {
    consumeRouterReturn: {
        level: number;
        matches: boolean | null;
        getLocalPath: () => string;
        setLocalPath: (path: string) => void;
        pathWhenMatching: string | null;
    }
}

export function useConsumeRouter({ context, managedChildParameters, managedChildParameters: { index }, consumeRouterParameters: { onLocalPathChange, localPath: wantedLocalPath } }: UseConsumeRouterParameters): UseConsumeRouterReturn {
    const { routerContext: { level, notifyParentThatNonDefaultMatchHasChanged } } = context;
    const [anyMatchesAmongNonDefaultSiblings, setAnyMatchesAmongNonDefaultSiblings] = useState(null as null | boolean);

    const [pathWhenMatching, setPathWhenMatching] = useState(null as null | string);

    const { managedChildReturn } = useManagedChild<RouterChildInfo>({
        context,
        managedChildParameters
    }, {
        index,
        setAnyMatchesAmongNonDefaultSiblings: useStableCallback((anyMatches) => {
            setAnyMatchesAmongNonDefaultSiblings(anyMatches);
            onLocalPathChange2(wantedLocalPath, anyMatches, getLocalPath());
        })
    });

    useLayoutEffect(() => {
        onLocalPathChange2(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, getLocalPath());
    }, [wantedLocalPath, anyMatchesAmongNonDefaultSiblings])


    const onLocalPathChange2 = useStableCallback(function (wantedLocalPath: RouterPathType, anyMatchesAmongNonDefaultSiblings: boolean | null, path: string) {
        const matches = pathCompare(wantedLocalPath, anyMatchesAmongNonDefaultSiblings, path);
        setMatches(matches);
        console.log(`${index}: onLocalPathChange2(wlp: ${(wantedLocalPath ?? "null").toString()}, amands: ${(anyMatchesAmongNonDefaultSiblings ?? "null").toString()}, p: ${path}): ${(matches ?? "null").toString()}`)
        if (matches)
            setPathWhenMatching(path);

        if (wantedLocalPath != null) {
            notifyParentThatNonDefaultMatchHasChanged(index, matches);
        }
        else {
            notifyParentThatNonDefaultMatchHasChanged(index, null);
        }
    })
    const [matches, setMatches] = useState(null as null | boolean);
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
    }
}


function useLocalPath({ consumeRouterReturn: { level }, localRouteParameters: { onLocalPathChange } }: UseLocalPathParameters) {

    useEnsureStability("useLocalPath", level);

    const urlToPath = useCallback((url: string) => {
        const oldHashPath = normalizeHashToPath(trimHash(new URL(url).hash));
        return oldHashPath[level];
    }, [])

    const [getLocalPath, setLocalPath] = usePassiveState<string, never>(useStableCallback(onLocalPathChange), useCallback(() => { 
        return urlToPath(window.location.href);
    }, [urlToPath]));


    // Any time the URL changes, inspect the hash
    // at our current level, and change our local copy of our path
    // in our passive state. This will trigger our callback if they're different.
    useUrl(url => { setLocalPath(urlToPath(url)); });

    return [getLocalPath, setLocalPath] as const;
}


export function pathCompare(requestedLocalHash: null | string | RegExp | ((localHash: string) => boolean), anyMatchesAmongNonDefaultSiblings: boolean | null, localPath: string | null) {
    let matches: boolean | null;
    localPath ??= "";

    if (requestedLocalHash instanceof RegExp)
        matches = (requestedLocalHash.test(localPath));
    else if (requestedLocalHash instanceof Function)
        matches = (requestedLocalHash(localPath));

    else if (requestedLocalHash == null)
        matches = (anyMatchesAmongNonDefaultSiblings == null? null : !anyMatchesAmongNonDefaultSiblings);
    else
        matches = (requestedLocalHash === localPath);

    return matches;
}

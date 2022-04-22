import { useState, useEffect } from "preact-prop-helpers";
import { useContext, useMemo, useCallback } from "preact/hooks";
import { RouterContext } from "./use-router-provider";
import { useLocalPathMatches } from "./use-local-path-matches";
import { RouterPathType } from "./util";


export interface UseRouterConsumerArguments {
    localPath?: RouterPathType | null;
}

/**
 * The "child" part of a router.
 * 
 * This is responsible for observing the current directory in the hash,
 * and notifying the parent any time it becomes valid/invalid, because
 * if this path and all its siblings are invalid at the same time,
 * the default path is allowed to be shown.
 */
export function useRouterConsumer({ localPath }: UseRouterConsumerArguments) {
    const { level, matchChangeHandler, useRouterChild } = useContext(RouterContext)!;
    const [siblingsHaveNoMatches, setSiblingsHaveNoMatches] = useState(false);
    const index = useMemo(() => ((localPath ?? "") + `-${Math.random()}`), [localPath ?? ""]);
    let matches = useLocalPathMatches(level, localPath ?? "");

    const contextFromParent = useContext(RouterContext);

    // Any time our match status changes, notify the parent.
    // This is how siblingsHaveNoMatches changes.
    useEffect(() => {
        matchChangeHandler?.(index, matches);
        return () => matchChangeHandler?.(index, false);
    }, [matchChangeHandler, index, matches]);



    // Handle some special cases related to matching:
    if (contextFromParent == null || contextFromParent.level < 0) {
        // The root-most router always displays, because
        // it's mostly here as a formality for context management anyway.

        matches = true;
        console.assert(!localPath, `The root Router always displays and will ignore the path "${localPath}".`);
    }
    else if (localPath == null) {
        // If this is a "default" router, then we show only if
        // our parent Router has told us that none of our
        // sibling routers are currently displaying.
        matches = siblingsHaveNoMatches;
    }

    // Collect some things that the <Component /> will need to display itself.
    const infoFromParent = useRouterChild?.({ index, notifyOfSiblingsHaveNoMatches: setSiblingsHaveNoMatches });
    const useManagedChildProps2 = infoFromParent?.useManagedChildProps;
    const getElement2 = infoFromParent?.getElement;
    const useManagedChildProps = useCallback<NonNullable<typeof useManagedChildProps2>>((props) => { return (useManagedChildProps2?.(props) ?? props); }, []);
    const getElement = useCallback<NonNullable<typeof getElement2>>(() => { return (getElement2?.() ?? null); }, []);

    return {
        useManagedChildProps,
        getElement,
        matches,
        level,
        siblingsHaveNoMatches
    }
}
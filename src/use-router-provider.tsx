import { createContext } from "preact";
import { useChildManager, usePassiveState, useStableCallback } from "preact-prop-helpers";
import type { UsedManagedChild } from "preact-prop-helpers/use-child-manager";
import { useCallback, useContext, useEffect, useMemo, useRef } from "preact/hooks";
import { RouterChildren, RouterContextType } from "./util";


export const RouterContext = createContext<RouterContextType | null>(null);

function returnFalse() { return false; }


/**
 * The "parent" part of a router.
 * 
 * This is responsible for coordinating, among all children, which route to show.
 * This coordination is really only needed for the "default" pathway, which
 * needs to know as painlessly as possible whether any of its siblings are currently valid.
 * 
 * It also increases the depth by one, starting at depth=-1 for the root router is *just* a parent.
 */
export function useRouterProvider(): RouterContextType {
    const { level } = useContext(RouterContext) ?? { level: -1 };
    console.log(`useRouterProvider: ${level}`);
    const { useManagedChild, mountedChildren } = useChildManager<RouterChildren>();

    // Any time the number of matching children changes to or from 0,
    // we notify all children so that they can show/hide themselves accordingly
    // depending on if they are a "default" router or not.
    const [noMatchesAmongChildren, setNoMatchesAmongChildren] = usePassiveState(useStableCallback((noMatches: boolean) => {
        console.log(`Level ${level} notifying all ${mountedChildren} children of sibling match status: ${noMatches.toString()}`)
        for (let child of mountedChildren) {
            child?.notifyOfSiblingsHaveNoMatches(noMatches);
        }
    }), returnFalse);

    // Keep track of the number of children currently matching
    const matchIndices = useRef(new Set<string>());

    const useRouterChild = useCallback<UsedManagedChild<RouterChildren>>((info: RouterChildren) => {
        const { index, matches, path } = info;
        useEffect(() => {
            if (path != null) {
                if (matches) {
                    matchIndices.current.add(index);
                }
                else {
                    matchIndices.current.delete(index);
                }
                console.log(`${matchIndices.current.size} matching children: ${Array.from(matchIndices.current).join(",")}`);
                setNoMatchesAmongChildren(matchIndices.current.size == 0);
            }
        }, [matches, index, path]);

        return useManagedChild(info);

    }, []);

    return useMemo(() => ({
        useRouterChild,
        level: (level ?? -2) + 1
    }), [level, useRouterChild]);
}
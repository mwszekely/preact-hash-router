import { createContext } from "preact";
import { useChildManager, usePassiveState } from "preact-prop-helpers";
import { useCallback, useContext, useMemo, useRef } from "preact/hooks";
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
    const level = useContext(RouterContext)?.level;
    const { useManagedChild: useRouterChild, mountedChildren } = useChildManager<RouterChildren>();

    // Any time the number of matching children changes to or from 0,
    // we notify all children so that they can show/hide themselves accordingly
    // depending on if they are a "default" router or not.
    const onChildrenMatchCountChange = useCallback((anyMatches: boolean) => {
        for (let child of mountedChildren) {
            child?.notifyOfSiblingsHaveNoMatches(!anyMatches);
        }
    }, []);
    const [anyMatchesAmongChildren, setAnyMatchesAmongChildren] = usePassiveState(onChildrenMatchCountChange, returnFalse);

    // Keep track of the number of children currently matching
    const matchIndices = useRef(new Set<string>());
    const matchChangeHandler = useCallback<RouterContextType["matchChangeHandler"]>((index, matches) => {
        if (matches) {
            matchIndices.current.add(index);
        }
        else {
            matchIndices.current.delete(index);
        }
        setAnyMatchesAmongChildren(matchIndices.current.size != 0);
    }, []);

    return useMemo(() => ({
        matchChangeHandler,
        useRouterChild,
        level: (level ?? -2) + 1
    }), [matchChangeHandler, level, useRouterChild]);
}
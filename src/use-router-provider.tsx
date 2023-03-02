import { createContext } from "preact";
import { returnNull, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnType, usePassiveState, useStableCallback, useStableObject } from "preact-prop-helpers";
import { useContext, useRef } from "preact/hooks";
import { RouterChildInfo, RouterContextType } from "./util.js";


export const RouterContext = createContext<RouterContextType | null>(null);

function returnFalse() { return false; }


export interface UseProvideRouterParameters extends UseManagedChildrenParameters<RouterChildInfo> {

}

export interface UseProvideRouterReturnType extends UseManagedChildrenReturnType<RouterChildInfo> {
    context: RouterContextType;
}

//const RouterContext = createContext<RouterContextType | null>(null);

/**
 * The "parent" part of a router.
 * 
 * This is responsible for coordinating, among all children, which route to show.
 * This coordination is really only needed for the "default" pathway, which
 * needs to know as painlessly as possible whether any of its siblings are currently valid.
 * 
 * It also increases the depth by one, starting at depth=-1 for the root router is *just* a parent.
 */

export function useProvideRouter({ managedChildrenParameters }: UseProvideRouterParameters): UseProvideRouterReturnType {
    const { context, managedChildrenReturn } = useManagedChildren<RouterChildInfo>({ managedChildrenParameters });
    const { routerContext: { level } } = useContext(RouterContext) ?? { routerContext: { level: -1 } }

    const matchingIndices = useRef<Set<string>>(new Set());
    const [getShowingDefault, setShowingDefault] = usePassiveState<boolean | null, never>(useStableCallback(showingDefault => {
        managedChildrenReturn.getChildren().forEach(child => {
            child.setAnyMatchesAmongNonDefaultSiblings(!showingDefault);
        })
    }), returnNull);
    const onNonDefaultChildMatchChanged = useStableCallback((index: string, matches: boolean | null) => {
        matchingIndices.current[matches ? "add" : "delete"](index);
        setShowingDefault(matchingIndices.current.size == 0);
    })

    return {
        context: useStableObject({
            ...context,
            routerContext: useStableObject({
                level: level + 1,
                notifyParentThatNonDefaultMatchHasChanged: onNonDefaultChildMatchChanged
            })
        }),
        managedChildrenReturn
    }

}

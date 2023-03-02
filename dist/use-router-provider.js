import { createContext } from "preact";
import { returnNull, useManagedChildren, usePassiveState, useStableCallback, useStableObject } from "preact-prop-helpers";
import { useContext, useRef } from "preact/hooks";
export const RouterContext = createContext(null);
function returnFalse() { return false; }
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
export function useProvideRouter({ managedChildrenParameters }) {
    const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { routerContext: { level } } = useContext(RouterContext) ?? { routerContext: { level: -1 } };
    const matchingIndices = useRef(new Set());
    const [getShowingDefault, setShowingDefault] = usePassiveState(useStableCallback(showingDefault => {
        managedChildrenReturn.getChildren().forEach(child => {
            child.setAnyMatchesAmongNonDefaultSiblings(!showingDefault);
        });
    }), returnNull);
    const onNonDefaultChildMatchChanged = useStableCallback((index, matches) => {
        matchingIndices.current[matches ? "add" : "delete"](index);
        setShowingDefault(matchingIndices.current.size == 0);
    });
    return {
        context: useStableObject({
            ...context,
            routerContext: useStableObject({
                level: level + 1,
                notifyParentThatNonDefaultMatchHasChanged: onNonDefaultChildMatchChanged
            })
        }),
        managedChildrenReturn
    };
}
//# sourceMappingURL=use-router-provider.js.map
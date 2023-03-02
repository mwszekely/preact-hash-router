import { UseManagedChildrenParameters, UseManagedChildrenReturnType } from "preact-prop-helpers";
import { RouterChildInfo, RouterContextType } from "./util.js";
export declare const RouterContext: import("preact").Context<RouterContextType | null>;
export interface UseProvideRouterParameters extends UseManagedChildrenParameters<RouterChildInfo> {
}
export interface UseProvideRouterReturnType extends UseManagedChildrenReturnType<RouterChildInfo> {
    context: RouterContextType;
}
/**
 * The "parent" part of a router.
 *
 * This is responsible for coordinating, among all children, which route to show.
 * This coordination is really only needed for the "default" pathway, which
 * needs to know as painlessly as possible whether any of its siblings are currently valid.
 *
 * It also increases the depth by one, starting at depth=-1 for the root router is *just* a parent.
 */
export declare function useProvideRouter({ managedChildrenParameters }: UseProvideRouterParameters): UseProvideRouterReturnType;
//# sourceMappingURL=use-router-provider.d.ts.map
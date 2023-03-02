import { OnPassiveStateChange, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildReturnType } from "preact-prop-helpers";
import { RouterChildInfo, RouterPathType } from "./util.js";
export interface UseLocalPathParameters {
    consumeRouterReturn: Pick<UseConsumeRouterReturn["consumeRouterReturn"], "level">;
    localRouteParameters: {
        onLocalPathChange: OnPassiveStateChange<string, never>;
    };
}
export interface RouterContextType extends UseManagedChildrenContext<RouterChildInfo> {
    routerContext: {
        level: number;
        notifyParentThatNonDefaultMatchHasChanged(index: string, matches: boolean | null): void;
    };
}
export interface UseRouterConsumerArguments {
    routerConsumerParameters: {
        localPath: RouterPathType | null;
    };
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
    };
}
export interface UseConsumeRouterReturn extends UseManagedChildReturnType<RouterChildInfo> {
    consumeRouterReturn: {
        level: number;
        matches: boolean | null;
        getLocalPath: () => string;
        setLocalPath: (path: string) => void;
        pathWhenMatching: string | null;
    };
}
export declare function useConsumeRouter({ context, managedChildParameters, managedChildParameters: { index }, consumeRouterParameters: { onLocalPathChange, localPath: wantedLocalPath } }: UseConsumeRouterParameters): UseConsumeRouterReturn;
export declare function pathCompare(requestedLocalHash: null | string | RegExp | ((localHash: string) => boolean), anyMatchesAmongNonDefaultSiblings: boolean | null, localPath: string | null): boolean | null;
//# sourceMappingURL=use-router-consumer.d.ts.map
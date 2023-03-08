import { ComponentChildren, Ref } from "preact";
import { OnPassiveStateChange, useEnsureStability } from "preact-prop-helpers";
import { useContext, useImperativeHandle, useMemo } from "preact/hooks";
import { useConsumeRouter, UseConsumeRouterReturn } from "./use-router-consumer.js";
import { useRouterControls } from "./use-router-controls.js";
import { RouterContext, useProvideRouter } from "./use-router-provider.js";
import { RouterControls, RouterPathType } from "./util.js";

export interface RouterProps {
    /**
     * A function that returns the children to display, given the current local path, if one matches.
     * 
     * `null` will be passed when you should hide the contents, and the string that matched will be passed otherwise.
     * 
     * @param pathWhenMatching When `null`, don't show, because the URL isn't on this path. Any other string value is the current path that this `Router` matches.
     * @returns What you want to render.
     */
    children: (pathWhenMatching: string | null, controls: RouterControls) => ComponentChildren;

    /**
     * What path or paths this `Router` should show itself on.
     * 
     * Can be a string, RegExp, or `(p: string) => boolean`. Or `null` to be a "default" `Router`.
     * 
     * "Default" `Router`s (`locapPath={null}`) are shown when no other `Router` at the same level matches.
     */
    localPath: RouterPathType;

    /**
     * Optional. If you would like to know what the current path is even when not currently being shown, you can get that information here.
     * 
     * For example, you can pass a normal `setState` function here.
     */
    onLocalPathChange?: OnPassiveStateChange<string, never>;
}

/**
 * Allows you to conditionally hide/show content based on a path in the hash component of the URL.
 * 
 * @param param0 
 * @param ref 
 * @returns 
 */
export function Router({ localPath, onLocalPathChange, children }: RouterProps, ref?: Ref<any>) {
    const context = useContext(RouterContext);

    const { context: contextFromParent, managedChildrenReturn } = useProvideRouter({ managedChildrenParameters: {} });
    const index = useMemo(() => ((localPath ?? "<default>") + `-${Math.random()}`), [localPath]);
    let consumeRouterReturn: UseConsumeRouterReturn | null = null;
    useEnsureStability("Router", !!context);

    if (context) {
        consumeRouterReturn = useConsumeRouter({ consumeRouterParameters: { localPath, onLocalPathChange }, context, managedChildParameters: { index } });
    }

    const { consumeRouterReturn: { level, matches, pathWhenMatching } } = consumeRouterReturn ?? { consumeRouterReturn: { level: -1, matches: null, pathWhenMatching: null } }

    const controls = useRouterControls(level);

    useImperativeHandle(ref!, () => ({
        level,
        matches,
        pathWhenMatching,
        ...controls
    }))

    return (
        <RouterContext.Provider value={contextFromParent}>
            {children(level == -1 ? "/" : matches ? pathWhenMatching : null, useRouterControls(level))}
        </RouterContext.Provider>
    )
}


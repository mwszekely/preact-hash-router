import { jsx as _jsx } from "preact/jsx-runtime";
import { useEnsureStability } from "preact-prop-helpers";
import { useContext, useImperativeHandle, useMemo } from "preact/hooks";
import { useConsumeRouter } from "./use-router-consumer.js";
import { useRouterControls } from "./use-router-controls.js";
import { RouterContext, useProvideRouter } from "./use-router-provider.js";
/**
 * Allows you to conditionally hide/show content based on a path in the hash component of the URL.
 *
 * @param param0
 * @param ref
 * @returns
 */
export function Router({ localPath, onLocalPathChange, children }, ref) {
    const context = useContext(RouterContext);
    const { context: contextFromParent, managedChildrenReturn } = useProvideRouter({ managedChildrenParameters: {} });
    const index = useMemo(() => ((localPath ?? "<default>") + `-${Math.random()}`), [localPath]);
    let consumeRouterReturn = null;
    useEnsureStability("Router", !!context);
    if (context) {
        consumeRouterReturn = useConsumeRouter({ consumeRouterParameters: { localPath, onLocalPathChange }, context, managedChildParameters: { index } });
    }
    const { consumeRouterReturn: { level, matches, pathWhenMatching } } = consumeRouterReturn ?? { consumeRouterReturn: { level: -1, matches: null, pathWhenMatching: null } };
    const controls = useRouterControls(level);
    useImperativeHandle(ref, () => ({
        level,
        matches,
        pathWhenMatching,
        ...controls
    }));
    return (_jsx(RouterContext.Provider, { value: contextFromParent, children: children(level == -1 ? "/" : matches ? pathWhenMatching : null, useRouterControls(level)) }));
}
//# sourceMappingURL=router.js.map
import { ComponentChildren, Ref } from "preact";
import { OnPassiveStateChange } from "preact-prop-helpers";
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
export declare function Router({ localPath, onLocalPathChange, children }: RouterProps, ref?: Ref<any>): import("preact").JSX.Element;
//# sourceMappingURL=router.d.ts.map
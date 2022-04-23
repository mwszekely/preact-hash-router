import { cloneElement, ComponentChildren, createContext, Fragment, h, JSX, Ref, RenderableProps, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { forwardRef } from "preact/compat";
import { useCallback, useContext, useImperativeHandle, useMemo, useRef } from "preact/hooks";
import { RouterControls, RouterPathType } from "./util";
import { useRouterControls } from "./use-router-controls";
import { useRouterConsumer } from "./use-router-consumer";
import { RouterContext, useRouterProvider } from "./use-router-provider";

export interface RouterProps<T extends <E extends HTMLElement>(...args: any[]) => h.JSX.Element> {
    /**
     * Which paths does this router cover?
     * 
     * Can be a string, RegExp, or function.
     * 
     * Always relative to just the current single directory.
     * 
     * If null or unspecified, then this Router will *only* show
     * if all other sibling routers *do not* now because they
     * didn't have a match. A local 404, sort of.
     */
    localPath?: null | RouterPathType;

    /**
     * Fired whenever the local path changes, and the value it changes to.
     * 
     * This will fire regardless of if the path is a match, so the isMatch
     * parameter determines if this Router is showing its contents as a result
     */
    onPathChange?: null | ((path: string | null, isMatch: boolean) => void);

    /**
     * Like onPathChange, but only fires when the current path is a match.
     */
    onMatchChange?: null | ((path: string | null) => void);

    /**
     * If true, the router will always show its contents,
     * and this Router is just used for inspecting its 
     * directory (if any)
     */
    optional?: boolean;

    /**
     * If provided, the component used to show/hide children.
     * 
     * It needs at least a boolean prop named `show`, with
     * all other props passed on to the child.
     */
    Transition?: T;
}

export function useRouter({ localPath }: { localPath?: RouterPathType | null }) {
    const { level, matchChangeHandler, useRouterChild } = useRouterProvider();
    const { useManagedChildProps, getElement, matches } = useRouterConsumer({ localPath });
    return { level, matchChangeHandler, useRouterChild, useManagedChildProps, getElement, matches };
}

export const RouterProvider = forwardRef(RouterProviderImpl) as typeof RouterProviderImpl;
function RouterProviderImpl({ children }: { children: ComponentChildren }) {
    const { level, matchChangeHandler, useRouterChild } = useRouterProvider();
    return (
        <RouterContext.Provider value={useMemo(() => ({ level, matchChangeHandler, useRouterChild }), [level, matchChangeHandler, useRouterChild])}>
            {children}
        </RouterContext.Provider>
    );
}

export const RouterConsumer = forwardRef(RouterConsumerImpl) as typeof RouterConsumerImpl;
function RouterConsumerImpl<T extends <E extends HTMLElement>(...args: any[]) => h.JSX.Element>({ Transition, onPathChange, onMatchChange, children, optional, localPath, ...rest }: RenderableProps<RouterProps<T>>, ref?: Ref<RouterRefType>): JSX.Element {
    const { useManagedChildProps, getElement, matches, siblingsHaveNoMatches } = useRouterConsumer({ localPath });

    const backupRef = useRef<any>(null);
    ref ??= backupRef;

    const { getLocalPath, popLocalPath, pushLocalPath, setLocalPath: setLocalPath, level } = useRouterControls({ onPathChange: useCallback((newPath: string | null) => { if (matches) onMatchChange?.(newPath); onPathChange?.(newPath, matches); }, [onPathChange, matches]) });
    useImperativeHandle(ref, () => ({ level, getElement, getLocalPath, popLocalPath, pushLocalPath, setLocalPath }), [level, getElement, getLocalPath, popLocalPath, pushLocalPath, setLocalPath]);

    let TransitionImpl = Transition;
    const DefaultTransition = useContext(RouterTransitionContext);
    if (!TransitionImpl) {
        TransitionImpl = DefaultTransition as T;
    }


    return (<TransitionImpl show={matches || optional} {...useManagedChildProps(useMergedProps()(rest, { className: "router", "data-level": `${level}`, 'data-path': typeof localPath == "string" ? localPath : undefined, children })) as any} />)
}

export const Router: typeof RouterImpl = forwardRef(RouterImpl) as any;
function RouterImpl<T extends <E extends HTMLElement>(...args: any[]) => h.JSX.Element>(props: RenderableProps<RouterProps<T>>, ref?: Ref<RouterRefType>): JSX.Element {
    return (
        <RouterProvider>
            <RouterConsumer {...props} ref={ref} />
        </RouterProvider>
    )
}



// Extremely simple "transition" that just swaps children in and out without animating them.
const DefaultTransition = forwardRef(function DefaultTransition({ show, children, ...rest }: { show: boolean, children: ComponentChildren }, ref?: Ref<any>) {
    if (show)
        return <>{cloneElement(children as VNode<any>, useMergedProps<any>()({ ref, ...(children as VNode<any>).props }, rest))}</>
    return null;
});

type TransitionType = <E extends HTMLElement>(...args: any[]) => (h.JSX.Element | null);
const RouterTransitionContext = createContext<TransitionType>(DefaultTransition);

/**
 * Any `Router` that is a child of this will use that `Transition` component by default.
 * 
 * You may need to wrap an existing `Transition` component in a separate component so that
 * it auto-provides any props you want.
 */
export function ProvideRouterTransition({ Transition, children }: { Transition: TransitionType, children: ComponentChildren }) {
    return (
        <RouterTransitionContext.Provider value={Transition}>
            {children}
        </RouterTransitionContext.Provider>
    )
}

export interface RouterRefType extends RouterControls {
    getElement(): (EventTarget | null);
};

import { useGlobalHandler, usePassiveState, useStableCallback } from "preact-prop-helpers";
import { useCallback } from "preact/hooks";

/**
 * Relatively low-level hook that allows you to inspect
 * when the entire URL changes, either because the hash changed,
 * or because the Back/Forward browser buttons were pressed.
 * 
 * (Changing query parameters reloads the page and so isn't
 * tracked, unless of course it's because of the browser
 * navigating back/forwards).
 * 
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
export function useUrl(onUrlChange: (url: string) => void) {

    const [getUrl, setUrl] = usePassiveState<string, never>(useStableCallback(onUrlChange), useCallback(() => window.location.toString(), []));

    useGlobalHandler(window, "hashchange", e => {
        setUrl(window.location.toString());
    });

    useGlobalHandler(window, "popstate", (e: PopStateEvent) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#the_history_stack
        // TODO: If this assert never fires, it's *probably* fine??
        console.assert(window.location.toString() === document.location.toString());
        setUrl(window.location.toString());
    });

    return [getUrl, setUrl] as const;
}



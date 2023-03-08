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
export declare function useUrl(onUrlChange: (url: string) => void): readonly [() => string, import("preact-prop-helpers").PassiveStateUpdater<string, never>];
//# sourceMappingURL=use-url.d.ts.map
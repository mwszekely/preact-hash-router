import { useStableCallback } from "preact-prop-helpers";
import { useState } from "preact/hooks";
import { useGetLocalPath } from "./use-get-local-path";

/**
 * Inspects the local path at this level and returns wither or not
 * it is a match for the given criteria.
 * 
 * @param requestedLocalHash A string to match against exactly, a `RegExp` to `.test` with, or a function that returns true if the comparison should be considered a match.
 */
export function useLocalPathMatches(level: number, requestedLocalHash: null | string | RegExp | ((localHash: string) => boolean), siblingsHaveNoMatches: boolean) {
    const [matches, setMatches] = useState(false);
    const getLocalPath = useGetLocalPath(level, useStableCallback((localPath: string | null) => {
        let matches: boolean;
        localPath ??= "";

        if (requestedLocalHash instanceof RegExp)
            matches = (requestedLocalHash.test(localPath));
        else if (requestedLocalHash instanceof Function)
            matches = (requestedLocalHash(localPath));

        else if (requestedLocalHash == null)
            matches = siblingsHaveNoMatches;
        else
            matches = (requestedLocalHash === localPath);

        setMatches(matches);
    }));

    return matches;
}

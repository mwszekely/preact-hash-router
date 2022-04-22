import { useCallback, useState } from "preact/hooks";
import { useLocalPath } from "./use-local-path";

/**
 * Inspects the local path at this level and returns wither or not
 * it is a match for the given criteria.
 * 
 * @param requestedLocalHash A string to match against exactly, a `RegExp` to `.test` with, or a function that returns true if the comparison should be considered a match.
 */
export function useLocalPathMatches(level: number, requestedLocalHash: string | RegExp | ((localHash: string) => boolean)) {
    const [matches, setMatches] = useState(false);
    const [getLocalPath, setLocalPath] = useLocalPath(level, useCallback((localPath: string | null) => {
        let matches: boolean;
        localPath ??= "";

        if (requestedLocalHash instanceof RegExp)
            matches = (requestedLocalHash.test(localPath));
        else if (requestedLocalHash instanceof Function)
            matches = (requestedLocalHash(localPath));

        else
            matches = (requestedLocalHash === localPath);

        setMatches(matches);
    }, []));

    return matches;
}

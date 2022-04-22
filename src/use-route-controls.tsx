import { useLocalPathMatches } from "./use-local-path-matches";
import { usePopLocalHash } from "./use-pop-local-hash";
import { usePushLocalHash } from "./use-push-local-hash";
import { useSetLocalHash } from "./use-set-local-hash";

/**
 * Wraps all available routing functions into one hook.
 */
export function useRouter(requestedLocalHash: string | RegExp | ((localHash: string) => boolean)) {
    return {
        matches: useLocalPathMatches(requestedLocalHash),
        setLocalHash: useSetLocalHash(),
        pushLocalHash: usePushLocalHash(),
        popLocalHash: usePopLocalHash()
    }
}



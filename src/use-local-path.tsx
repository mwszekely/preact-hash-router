import { usePassiveState } from "preact-prop-helpers";
import { useEnsureStability } from "preact-prop-helpers/use-passive-state";
import { useUrl } from "./use-url";
import { normalizeHashToPath, trimHash } from "./util";

export function useLocalPath(level: number, callback?: null | undefined | ((localPath: string | null) => (void | (() => void)))) {
    useEnsureStability("useLocalPath", callback);
    const [getLocalPath, setLocalPath] = usePassiveState<string | null>(callback);

    const [getUrl, setUrl] = useUrl(url => {
        const newHashPath = normalizeHashToPath(trimHash(new URL(url).hash));
        setLocalPath(newHashPath[level] ?? null);
    });

    return [getLocalPath, setLocalPath] as const;
}

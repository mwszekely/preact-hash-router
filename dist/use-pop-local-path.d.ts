/**
 * Removes the directory at the current level, effectively returning
 * to the previous level.  You can also switch to a different
 * previous level if you would like.
 */
export declare function usePopLocalPath(level: number): (dir?: string, action?: "push" | "replace") => void;
export declare function popLocalPath(level: number, dir?: string): string;
//# sourceMappingURL=use-pop-local-path.d.ts.map
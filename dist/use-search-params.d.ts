import { OnPassiveStateChange } from "preact-prop-helpers";
import { TypeMap } from "./util.js";
export type OnParamValueChanged<T extends "string" | "boolean" | "number" | "bigint"> = OnPassiveStateChange<TypeMap[T] | null, never>;
export type SetParamWithHistory<T extends "string" | "boolean" | "number" | "bigint"> = (value: TypeMap[T] | null | ((prevValue: TypeMap[T] | null) => (TypeMap[T] | null)), reason?: "push" | "replace") => void;
/**
 * Provides access to the requested Search Param's value
 *
 * Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not syncronous, but that's
 * like most calls to `setState` anyway I guess?
 *
 * @param paramKey The name of the URL search parameter to reference
 * @param type The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged Will be called any time the requested Search Parameter's value changes.
 */
export declare function useSearchParams<T extends "string" | "boolean" | "number" | "bigint">(paramKey: string, type: T, onParamValueChanged?: OnParamValueChanged<T>): readonly [() => TypeMap[T] | null, SetParamWithHistory<T>];
//# sourceMappingURL=use-search-params.d.ts.map
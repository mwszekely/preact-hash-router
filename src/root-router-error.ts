export class RootRouterError extends Error {
    constructor() {
        super(`The root Router object cannot have any path-related operations performed on it, as it is unchangeably /. Consider using the "ref" prop of a child Router object.`);
    }
} 
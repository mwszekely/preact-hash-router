/**
 * Error class used when attemps to modify the root directory occur.
 */
export class RootRouterError extends Error {
    constructor() {
        super(`The root Router's path can only be pushed to and cannot be set or popped from.`);
    }
}
//# sourceMappingURL=root-router-error.js.map
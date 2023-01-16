# Preact Basic Router

Implements simple fragment (hash)-based routing natively in Preact.  Meant to be simple to use with a small API surface; the only component you need is `<Router>`.

Usage starts with a `Router` object representing the root directory "/". Any child `Router`s can be given a local path to filter on, as in  `<Router localPath="foo">`, which will cause the `Router` to display its contents if the *local directory* in the hash of the URL matches whatever you give it. This path can also be a RegExp or function, and if given *no* path, then the `Router` will only display itself if none of its siblings would have.

When nested, a `Router` will consider its "local directory" to be one level deeper than its parent. Matches on a `Router` are *always* local and only every consider *one* single directory within the entire fragment path.

Here's an example with a URL **one level deep**:

(Note: There always needs to be an empty `Router` at the root of your program, but these are omitted for clarity in these examples)

```tsx
// example.com#/foo
function Example() {

    return (
        <>
            <Router localPath="foo">
                {path => path != null && "This is visible!"}
            </Router>
            <Router localPath={/ba(r|z)/}>
                {path => path != null && "Not visible..."}
            </Router>
        </>
    )
}
```

Modifying the example to handle a URL that's **two levels deep**:
```tsx
// example.com#/foo/bar/qaz/etc/etc/etc
function Example() {
    return (
        <>
            <Router localPath="foo">
                {
                    path => path != null && 
                    <>
                        Visible!
                        <Router localPath="bar">
                            {path => path != null && "Visible!"}
                        </Router>
                        <Router localPath="anti-bar">
                            {path => path != null && "Hidden..."}
                        </Router>
                        <Router>
                        {path => path != null && " Default, only visible at /foo/qax or similar"}
                        </Router>
                    </>
                }
            </Router>
            <Router localPath="anti-foo">
                {
                    path => path != null && 
                    <>
                        Hidden.....
                        <Router localPath="bar">
                            {path != null && "Hidden (because of parent)"}
                        </Router>
                    </>
                }
            </Router>
        </>
    )
}
```

Besides just reading the current path, you can modify it too:

```tsx
 <Router localPath="foo">
    {(path, { setLocalPath, pushLocalPath, popLocalPath }) => path != null && 
    <div>
        <button onClick={popLocalPath}>Back</button>
    </div>}
</Router>
```


## API

In rough order of usefulness:

* `<Router>`: Shows/hides its children based on the current URL, and manages communication among them.
  * `useRouterProvider`: Traverses one level deeper into the URL and provides that level's information.
  * `useRouterConsumer`: Allows access to the information at this level of the parsed URL.
* `useRouterControls`: Provides the ability to control the directory of the parent `<Router>`. For children, instead use `<Router ref={setControls} />`. The returned functions all do basically the same things as these lower level hooks that are used to implement it:
  * `useLocalPath`: Returns the directory at this level of the path (the returned value will contain no slashes)
  * `useSetLocalPath`: Changes the directory at this level, optionally keeping following entries
  * `usePushLocalPath`: Appends a directory, or replaces a directory immediately after, optionally keeping all following entries.
  * `usePopLocalPath`: Sets the current directory to null, clearing all following directories, and optionally replacing the parent directory with a new one.
* `useSearchParams`: A `usePassiveState`-like hook that allows manipulation of the search parameters in the URL via its key-value pairs. This is functionality not present in a `<Router>` because search parameters don't relate to each other like path fragments do, so no coordination amongst components that use them is needed.
* `useUrl`: Allows monitoring the current URL when it changes for any reason (that doesn't cause a page navigation). You usually won't need this, as other hooks provide more fine-tuned information than just "the entire URL".
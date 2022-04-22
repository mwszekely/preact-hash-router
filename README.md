# Preact Basic Router

Implements simple fragment (hash)-based routing natively in Preact.  Meant to be simple to use with a small API surface; the only component you need is `<Router>`.

Usage starts with a `Router` object representing the root directory "/". Any child `Router`s can be given a local path to filter on, as in  `<Router localPath="foo">`, which will cause the `Router` to display its contents if the *local directory* in the hash of the URL matches whatever you give it. This path can also be a RegExp or function, and if given *no* path, then the `Router` will only display itself if none of its siblings would have.

When nested, a `Router` will consider its "local directory" to be one level deeper than its parent. Matches on a `Router` are *always* local and only every consider *one* single directory within the entire fragment path.

Here's an example with a URL **one level deep**:
```tsx
// example.com#/foo
function App() {

    // The root Router is a special case
    // and always shows its contents
    //
    // The two child Routers are shown
    // based on their localPath values.
    return (
        <Router>
            <Router localPath="foo">
                This is visible!
            </Router>
            <Router localPath="anti-foo">
                Hidden.....
            </Router>
        </Router>
    )
}
```

Modifying the example to handle a URL that's **two levels deep**:
```tsx
// example.com#/foo/bar/qaz/etc/etc/etc
function App() {
    return (
        <Router>
            <Router localPath="foo">
                Visible!
                <Router localPath="bar">
                    Visible!
                </Router>
                <Router localPath="anti-bar">
                    Hidden.....
                </Router>
                <Router>
                    Default, only visible at /foo/qax or similar
                </Router>
            </Router>
            <Router localPath="anti-foo">
                Hidden.....
                <Router localPath="bar">
                    Hidden (because of parent)
                </Router>
            </Router>
        </Router>
    )
}
```


## Changing History

You can change the fragment path at runtime too, of course -- you don't need to rely on just the path the page loaded with.

The functions `setLocalPath`, `pushLocalPath`, and `popLocalPath` (also `getLocalPath`) can be used to manipulate the path of whatever `Router` is the parent. You can get these functions either through the `Router`'s imperative API (accessed through the `ref` prop), or with `useRouterControls`, which operates on the nearest parent `Router`.

```tsx
function FooComponent() {
    // Functions to change the path relative to the `Router` itself
    // (When you have multiple `Routers` at the same level, 
    // you can use the ref on any one of them)
    const  [controls, setControls] = useState<RouteControls | null>({});
    const { popLocalPath, pushLocalPath, setLocalPath } = (controls ?? {});

    return (
        <Router ref={setControls} localPath="test2">
            <button onClick={() => setLocalPath("step-2")}>Next</button>
            {...}
        </Router>
    );
}


function BarComponent() {
    // On the other hand, these functions change the path relative to
    // whatever `Router` is our parent at whatever level we're at.
    const { 
        setLocalPath,  // Change the current directory, optionally erasing trailing directories
        pushLocalPath, // Change/set the directory one level deeper, optionally erasing trailing directories
        popLocalPath,  // Remove the current directory and all trailing directories, optionally changing the parent directory to a different directory.
        getLocalPath,  // Get the directory at this level
        level          // What level we're controlling
    } = useRouterControls();

    return (<>{...}</>);
}
```



## How children are shown/hidden

A `Router` shows or hides its contents by wrapping its children in a component that takes a `show` prop and hides its contents unless `show` is `true`.

By default, this child component just renders the children when `show` is true and renders `null` otherwise.  If you would like to change how this works (maybe to have a more sophisticated transition than just `return null`), you can either:

1. Pass a `Transition` prop to the `Router`.  This must take a `show` prop, but otherwise anything goes.  Any unfamiliar props that the `Router` receives are forwarded onto the component you pass in as `Transition`.
2. Or, use `RouterTransitionContext` to implicitly provide this as the `Transiion` prop to every descendant `Route` where one wasn't given. Any `Router` that uses this will still forward unfamiliar props to it, but it might be best to just include any defaults you'd like yourself within the context so only `show` is used.

## API

In rough order of usefulness:

* `<Router>`: Shows/hides its children based on the current URL, and manages communication among them.
  * `<RouterProvider>`: Traverses one level deeper into the URL and provides that level's information. You can stick with just a `<Router>` unless you need the fine control.
  * `<RouterConsumer>`: Allows access to the information at this level of the parsed URL. You can stick with just a `<Router>` unless you need the fine control.
  * `useRouterProvider`, `useRouterConsumer`: The above two, but as hooks instead of a components
* `useRouterControls`: Provides the ability to control the directory of the parent `<Router>`. For children, instead use `<Router ref={setControls} />`. The returned functions all do basically the same things as these lower level hooks that are used to implement it:
  * `useLocalPath`: Returns the directory at this level of the path (the returned value will contain no slashes)
  * `useSetLocalPath`: Changes the directory at this level, optionally keeping following entries
  * `usePushLocalPath`: Appends a directory, or replaces a directory immediately after, optionally keeping all following entries.
  * `usePopLocalPath`: Sets the current directory to null, clearing all following directories, and optionally replacing the parent directory with a new one.
* `useSearchParams`: A `usePassiveState`-like hook that allows manipulation of the search parameters in the URL via its key-value pairs. This is functionality not present in a `<Router>` because search parameters don't relate to each other like path fragments do, so no coordination amongst components that use them is needed.
* `useUrl`: Allows monitoring the current URL when it changes for any reason (that doesn't cause a page navigation). You usually won't need this, as other hooks provide more fine-tuned information than just "the entire URL".
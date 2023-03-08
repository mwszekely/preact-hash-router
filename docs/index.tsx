import { Fragment, h, render } from "preact";
import { useState } from "preact-prop-helpers";
import { Swappable } from "preact-transition";
import "preact/debug";
import "preact/devtools";
import { Router, useSearchParams, useUrl } from "../";

const Component = () => {

    const [url, setUrl] = useState("");
    useUrl(setUrl);

    const [example, setExampleLocal] = useState<string | null>(null);
    const [getExample, setExample] = useSearchParams("example", "number");

    return (
        <Router localPath={null}>
            {(path, { pushLocalPath, popLocalPath, setLocalPath }) =>
                path != null && <div>
                    <p>This is the current URL: <code>{url}</code>.</p>
                    <p>This is content in the root router. It is always displayed, no matter what.</p>
                    <p>The <code>Router</code> that's rendering this content cannot have path-related functions performed on it, since the path is always just implicitly <code>/</code>.</p>
                    <p>Just beneath me is a child component that reads the first path after the root.</p>
                    <p><button onClick={() => {debugger;pushLocalPath("test1")}}>Push "test1"</button></p>
                    <p><button onClick={() => popLocalPath()}>Pop</button></p>
                    <p><button onClick={() => setLocalPath("test1")}>Set "test1"</button></p>
                    <p><label>Search param example: <input value={example ?? undefined} type="number" onInput={e => setExample(e.currentTarget.valueAsNumber)} /></label></p>
                    <hr />
                    <Swappable>
                        <div>
                            <Level1 />
                        </div>
                    </Swappable>
                </div>
            }
        </Router>
    )
}

function Level1() {

    //const [{ popLocalPath, pushLocalPath, setLocalPath }, setRouteControls] = useState<Partial<RouterControls>>({});

    return (
        <>
            <Router localPath={null}>
                {(path, { popLocalPath, pushLocalPath, setLocalPath }) =>
                    path != null && <div>
                        <p>This is within the first-level child <code>Router</code> that displays <em>default content</em>. That is, if no other <code>Router</code> at this level matches (which is presumably true if you're reading this), then <em>this</em> <code>Router</code> will display.</p>
                        <p>The current path is: <code>{path}</code></p>
                        <p>These buttons are hooked up to this <code>Router</code>'s <code>ref</code>, so they control this level in the path.</p>
                        <button onClick={() => { debugger; setLocalPath?.("") }}>(empty string)</button>
                        <button onClick={() => { debugger; setLocalPath?.("test1") }}>test1</button>
                        <button onClick={() => {debugger; setLocalPath?.("test2")}}>test2</button>
                    </div>}
            </Router>
            <Router localPath="">
                {(path) =>
                    path != null && <div>
                        <p>This is within the first-level child <code>Router</code> that displays when the path is empty (this is different from the default path, taken when there is no match from anyone at this level).</p>
                        <p>The current path is: <code>{path}</code></p>
                    </div>
                }
            </Router>
            {/*<Router localPath="">
                <div>
                    <p>This is within the first-level child <code>Router</code> that displays when the path is empty (this is different from the default path, taken when there is no match from anyone at this level).</p>
                </div>
            </Router>
            <Router localPath="test1">
                <div>
                    <Test1 />
                </div>
            </Router>
            <Router localPath="test2">
                <div>
                    <div>
                        <Test2 />
                    </div>
                </div>
    </Router>*/}
        </>
    )
}
/*
function Test1() {


    const [{ popLocalPath: popHash1, pushLocalPath: pushHash1, setLocalPath: setHash1 }, setRouteControls] = useState<Partial<RouterControls>>({});

    return (
        <>
            <p>This is within the first-level child <code>Router</code> that displays when the path is <code>test1</code>.<Test1 /></p>
            <p>Level 1, Test1
                <button onClick={() => { debugger; pushHash1?.("testa") }}>testA</button>
                <Router ref={setRouteControls} localPath="testa">
                    <div>A</div>
                </Router>
            </p>
        </>

    )
}

function Test2() {
    const [route0Controls, setRoute0Controls] = useState<RouterRefType | null>(null);
    const [route1Controls, setRoute1Controls] = useState<RouterRefType | null>(null);

    const [param, setParam] = useSearchParams("param", "boolean");
    console.log(param == null ? "<null>" : param);
    return (<>
        Test2: "{param == null ? "<null>" : param}".
        <Swappable>
            <span>
                <Router ref={setRoute1Controls} localPath="">
                    <div>
                        Test2
                        <button onClick={() => route1Controls?.setLocalPath?.("testa")}>testA</button>
                    </div>
                </Router>
                <Router ref={setRoute1Controls} localPath="testa">
                    <div>
                        <div>A</div>
                        <label><input checked={param ?? false} type="checkbox" onInput={e => { e.preventDefault(); setParam(e.currentTarget.checked) }} />Checkbox</label>
                    </div>
                </Router>
            </span>
        </Swappable>
    </>
    )
}*/

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})

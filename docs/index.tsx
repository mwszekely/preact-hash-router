import { Fragment, h, render } from "preact";
import { useState } from "preact-prop-helpers";
import { Swappable } from "preact-transition";
import "preact/debug";
import "preact/devtools";
import { Router, useSearchParams } from "../";
import { RouterRefType } from "../router";
import { RouterControls } from "../util";

const Component = () => {

    return (
        <Router>
            <div>
                <p>This is content in the root router. It is always displayed, no matter what.</p>
                <p>The <code>Router</code> that's rendering this content cannot have path-related functions performed on it, since the path is always just implicitly <code>/</code>.</p>
                <Swappable>
                    <div>
                        <Level1 />
                    </div>
                </Swappable>
            </div>
        </Router>
    )
}

function Level1() {

    const [{ popLocalPath, pushLocalPath, setLocalPath, getLocalPath }, setRouteControls] = useState<Partial<RouterControls>>({});

    return (
        <>
            <Router localPath={null} ref={setRouteControls}>
                <div>
                    <p>This is within the first-level child <code>Router</code> that displays <em>default content</em>. That is, if no other <code>Router</code> at this level matches (which is presumably true if you're reading this), then <em>this</em> <code>Router</code> will display.</p>
                    <button onClick={() => { debugger; setLocalPath?.("") }}>(empty string)</button>
                    <button onClick={() => { debugger; setLocalPath?.("test1") }}>test1</button>
                    <button onClick={() => setLocalPath?.("test2")}>test2</button>
                </div>
            </Router>
            <Router localPath="">
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
            </Router>
        </>
    )
}

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
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})

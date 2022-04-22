import "preact/debug";
import "preact/devtools";
import { Fragment, h, RefCallback, render } from "preact";
import { useRefElement, useState } from "preact-prop-helpers";
import { Swappable } from "preact-transition";
import { Router, useSearchParams } from "../"
import { RouterRefType } from "../router";
import { useRef } from "preact/hooks";
import { useLocalPath } from "../use-local-path";
import { RouterControls } from "../util";

const Component = () => {

    const [{ popLocalPath: popLocalHash, pushLocalPath: pushLocalHash, setLocalPath: setLocalHash, getLocalPath: getLocalHash }, setRouteControls] = useState<Partial<RouterControls>>({});
    return (
        <Router ref={setRouteControls}>
            <Level0 />
        </Router>
    )
}

function Level0() {
    const [localHash, setLocalHash] = useState<string | null>(null);


    return (
        <div class="level">
            This is within level 0.


            <div class="level">
                This is just outside level 1.
                <Swappable>
                    <div>
                        <Level1 />
                    </div>
                </Swappable>
            </div>
        </div>
    )
}

function Level1() {

    const [{ popLocalPath: popLocalHash, pushLocalPath: pushLocalHash, setLocalPath: setLocalHash, getLocalPath: getLocalHash }, setRouteControls] = useState<Partial<RouterControls>>({});

    return (
        <>
            <Router localPath="" ref={setRouteControls}>
                <div>
                    Within level 1, at level 0's default path
                </div>
                <button onClick={() => setLocalHash?.("test1")}>test1</button><button onClick={() => setLocalHash?.("test2")}>test2</button>

            </Router>
            <Router localPath="test1"><div>Within level 1, at level 0's test1 path</div><div><Test1 /></div></Router>
            <Router localPath="test2"><div>Within level 1, at level 0's test2 path</div><div><Test2 /></div></Router>
        </>
    )
}

function Test1() {


    const [{ popLocalPath: popHash1, pushLocalPath: pushHash1, setLocalPath: setHash1 }, setRouteControls] = useState<Partial<RouterControls>>({});

    return (
        <div class="level">Level 1, Test1<button onClick={() => { debugger; pushHash1?.("testa") }}>testA</button><Router ref={setRouteControls} localPath="testa">A</Router></div>
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
                    Test2
                    <button onClick={() => route1Controls?.setLocalPath?.("testa")}>testA</button>
                </Router>
                <Router ref={setRoute1Controls} localPath="testa">
                    <div>A</div>
                    <label><input checked={param ?? false} type="checkbox" onInput={e => { e.preventDefault(); setParam(e.currentTarget.checked) }} />Checkbox</label>
                </Router>
            </span>
        </Swappable>
    </>
    )
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})

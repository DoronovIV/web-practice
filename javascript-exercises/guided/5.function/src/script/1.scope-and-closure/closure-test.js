export function makeClosureTest() {
    // This is the infamous piece of code from C# metanit;
    //
    // List<Action> actions = new List<Action>();
    // for(var count=0; count<10; count++)
    // {
    //     actions.Add(() => Console.WriteLine(count));
    // }
    // foreach(var action in actions)
    // {
    //     action();
    // }

    // 10 of 10s? no, either this crap is working the opposite,
    // or I have just screw something in the code.
    let actions = [];
    for (let i = 0; i < 10; i++) {
        let func = function () {
            alert(i);
        };
        actions.push(func);
    }

    // I tested it two ways:
    //
    // for (let a of actionList) {
    //     a();
    // }

    doForeignScopeClosureTest(actions);

    // so, the thing was that js considers loop variable declaration as a scope-owned;
    // thus, it was copied all the way;
    // guess someone will have to get used to that feature ;)
    makeTenDozens();
}

function doForeignScopeClosureTest(actionList) {
    for (let a of actionList) {
        a();
    }
}

function makeTenDozens() {
    let actions = [];
    let i = 0;
    for (; i < 10; i++) {
        let func = function () {
            alert(i);
        };
        actions.push(func);
    }

    doForeignScopeClosureTest(actions);
}

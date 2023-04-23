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
    for (let i = 0; i < 10; ++i) {
        actions.push(() => {
            return alert(i);
        });
    }

    // I tested it two ways:
    //
    // for (let a of actionList) {
    //     a();
    // }

    doForeignScopeClosureTest(actions);
}

function doForeignScopeClosureTest(actionList) {
    for (let a of actionList) {
        a();
    }
}



function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function bob() {
        return "Bob is the name of this function.";
    }
}

function returnsAnAnonymousFunction() {
    return () => 4 + 3;
}
//Module for helpful promise-chaining links and async functions
function wait(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {resolve()}, t)
    })
}


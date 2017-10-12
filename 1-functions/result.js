function basicFunction() {
    return 42;
}

// const result = basicFunction();
// console.log('basicFunction', result);

const basicLambda = (param1, param2) => {
    return param1 + param2;
};

// const result = basicLambda(20, 22);
// console.log('basicLambda', result);


function callbackFunction(callback) {
    setTimeout(() => {
        callback(42);
    }, 1000);
}

// callbackFunction((result) => {
//     console.log('callbackFunction', result);
// });

function intervalFunction(callback) {
    const interval = setInterval(() => {
        callback(42);
    }, 1000);

    //clear interval
    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}

// intervalFunction((result) => {
//     console.log('intervalFunction', result);
// });

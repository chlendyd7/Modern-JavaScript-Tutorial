const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

const auxs = { increase, decrease };

function makeCounter(aux) {
    let num = 0;
    return function () {
        num = aux(num);
        return num;
    };
}

const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

const descreaser = makeCounter(auxs.decrease);
console.log(descreaser());
console.log(descreaser());

function square(number) {
    return number * number;
}

console.dir(square);

function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptor(square))

function muliply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(muliply());
console.log(muliply(1));
console.log(muliply(1));

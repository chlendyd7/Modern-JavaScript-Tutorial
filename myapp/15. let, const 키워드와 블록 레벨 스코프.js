var x = 1;
var y = 1;

var x = 100;
var y;
console.log(x);
console.log(y);


var x = 1;
if (true) {
    //x는 전역 변수 그러나 x 변수가 중복 선언
    var x = 10;
}
console.log(x);

var i = 10;
for (var i=0; i<5; i++) {
    console.log(i);
}

console.log(i);


console.log(foo);
foo=123;
console.log(foo);
var foo;

var foo = 123;
var foo = 456;
let bar = 123;
// let bar = 456; //SyntaxError: Identifier 'bar' has already been declared

let foo1 = 1;
{
    let foo1 = 2;
    let bar1 = 3;
}
console.log(foo1); //1
// console.log(bar1); //bar1 is not defined

// console.log(foo2);
let foo2;

// console.log(foo3);
let foo3;
console.log(foo3);

foo3 = 1;
console.log(foo3);

const foo4 = 1;
// const foo5; //SyntaxError: Missing initializer in const declaration

foo4 = 2; //TypeError: Assignment to constant variable.

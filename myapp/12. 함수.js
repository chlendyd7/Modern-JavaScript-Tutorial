function add(x, y){
    return x+y;
}
add(2, 5);

var add = new Function('x','y', 'return x + y');
var add = (x,y) => x+y;

// //기명 함수
// function foo() {console.log('foo');}
// foo();

(function bar() {console.log('bar');});
// bar();

var add = function foo(x,y) {
    return x+y;
};
console.log('=============')
console.log(add(2,5));
// console.log(foo(2,5));




console.dir(add);
console.dir(sub);

function add(x,y){
    return x+y
}

var sub = function(x,y) {
    return x-y;
}


var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
}());

console.log(add1(1, 2)); // 13

var add2 = (function () {
  var a = 10;
  return new Function('x', 'y', 'return x + y + a;');
}());

// console.log(add2(1, 2)); // ReferenceError: a is not defined

const add3 = (x, y) => x + y;
console.log(add3(2,5));

function add4(x,y) {
    console.log(x,y);
    return x + y;
}

add4(2,5);
// console.log(x,y);

function add(x, y) {
    return x + y;
}
console.log(add(2));

function add(x,y) {
    return x +y
}
console.log(add(2,5,10));

function add5(x,y) {
    console.log(arguments);

    return x + y;
}

add5(2,5,10);

function add6(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
  }

  return x + y;
}

// console.log(add6(2));        // TypeError: 인수는 모두 숫자 값이어야 합니다.
// console.log(add6('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.
// throw new TypeError('인수는 모두 숫자 값이어야 합니다.');

function add(a,b,c) {
    a = a||0;
    b = b||0;
    c = c||0;
    return a+b+c;
}

function add(a=0, b=0, c=0){
	return a+b+c;
}

function multiply(x,y) {
    return
}

function changeVal(primitive, obj) {
    primitive += 100;
    obj.name='kim';
}

var num = 100;
var person = {name:'Lee'};

// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}

// 외부 상태
var num = 100;
var person = { name: 'Lee' };

console.log(num); // 100
console.log(person); // {name: "Lee"}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // {name: "Kim"}

(function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

(function foo() {
    var a = 3;
    var b = 5;
    return a * b
})

// 재귀 함수
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
}
countdown(10);


function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));

console.log('=========================')
function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);
    }
    inner();
}
outer();

console.log('=========================')
function repeat(n) {
    for (var i = 0; i < n; i ++) console.log(i);
}
// repeat(5);

console.log('=========================')
repeat(5, function(i) {
    if (i % 2) console.log(i);
})
var logOdds = function(i) {
    if (i % 2) console.log(i);
};

repeat(5, logOdds);


document.getElementById('myButton').addEventListener('click', function () {
    console.log('button clicked!');
})

setTimeout(function () {
    console.log('1초 경과');
}, 1000);


var res = [1,2,3].map(function (item) {
    return item * 2;
});

res = [1, 2, 3].filter(function())
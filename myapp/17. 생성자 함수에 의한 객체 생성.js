const person = new Object();

person.name = 'Lee';
person.sayHello = function() {
    console.log('Hi! My name is ' + this.name)
}

console.log(person);
person.sayHello();

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

const circle3 = Circle(15);
console.log(circle3); //undefined
// console.log(radius); //15

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle4 = new Circle(5);

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}
const circle5 = new Circle(1);
console.log(circle5);

function foo() {}
foo.prop = 10;
foo.method = function() {
    console.log(this.prop);
};

foo.method(); //10

function foo() {}
const bar2 = function() {};
const baz = {
    x: function() {}
}

new foo();
// new bar();
new baz.x();

function add(x, y) {
    return x + y;
}

let inst = new add();

console.log(inst);

function createUser(name, role) {
    return {name, role};
}

inst = new createUser('Lee', 'admin');
console.log(inst);


function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle6 = Circle(5);
console.log(circle6); //undefined
console.log(radius) // 5
console.log(getDiameter()); //10

// circle6.getDiameter();
//TypeError: Cannot read properties of undefined (reading 'getDiameter')

function Circle2(radius) {
    if (!new.target) {
        return new Circle2(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle7 = Circle2(5);
console.log(circle1.getDiameter());

function Circle3(radius) {
    if (!(this instanceof Circle3)) {
        return new Circle3(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
const circle8 = Circle3(5);
console.log(circle8.getDiameter());

let obj = new Object();
console.log(obj);

obj = Object();
console.log(obj);

let f = new Function('x', 'return x ** x'); //[Function: anonymous]
console.log(f)

f = Function('x', 'return x * xx'); //[Function: anonymous]
console.log(f)

const str = String(123);
console.log(str, typeof str); //123 string

const num = Number('123');
console.log(num, typeof num); //123 number

const bool = Boolean('true');
console.log(bool, typeof bool); //true boolean

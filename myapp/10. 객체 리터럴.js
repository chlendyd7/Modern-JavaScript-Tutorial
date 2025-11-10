var person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person)
// object
console.log(person);
// { name: 'Lee', sayHello: [Function: sayHello] }

var person = {
    firstName: 'Ung-mo',
    'last-name': 'Lee'
};
console.log(person)

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);


var circle = {
    radius: 5,

    getDiameter: function () {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());


var person = {
	name: 'Lee'
}
console.log(person.name);
// console.log(person[name]);

var person = {
    name: 'Lee'
}
console.log(person.age);

var person = {
    'last-name': 'Lee',
    1: 10
};

var person = {
    name: 'Lee'
}
person.name = 'Kim';

console.log(person);
//{ name: 'Kim' }

var person = {
    name: 'Lee'
}

person.age = 20;
console.log(person);
//{ name: 'Lee', age: 20 }

var person = {
    name: 'Lee'
}
person.age = 20;

delete person.age;

// 존재하지 않는 객체를 삭제해도 에러가 발생하지 않는다
delete person.address;
console.log(person);

var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};
console.log(obj);

// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}

// ES6
let x1 = 1, y1 = 2;

// 프로퍼티 축약 표현
const obj1 = { x1, y1 };
console.log("==============================")
console.log(obj1); // {x: 1, y: 2}

var person = {
    name: 'Lee'
}

person.age = 20;

console.log(person);

delete person.age;
delete person.address;

console.log(person);


console.log("==============================")
var prefix = 'prop';
var i =0;
var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);

let i1 = 0;
const obj2 = {
    [`${prefix}-${++i1}`]: i1,
    [`${prefix}-${++i1}`]: i1,
    [`${prefix}-${++i1}`]: i1
}
console.log(obj2)

console.log("========= 메서드 축약 ========")
var obj3 = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi!' + this.name);
    }
};

obj3.sayHi();

const obj4 = {
    name: 'Lee',
    sayHi() {
        console.log('Hi!' + this.name);
    }
};
obj4.sayHi();

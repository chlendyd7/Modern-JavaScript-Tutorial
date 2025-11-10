const o = {};
o.a = 1;
console.log(o);

var str = 'string';
console.log(str[0]);

var str = 'string';
str[0] = 'S';
console.log(str)

var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;
console.log(score);
console.log(copy);

var person = {
    name: 'Lee'
};

const o = { x: {y:1}};
const c1 = {...o};

var person = {
    name:' Lee'
};

var copy = person;
console.log(copy === person);

console.log(score);

var score;
score = 80;

console.log(score);

console.log(10/0);
console.log(10/-0);
console.log(1*'String');

// var x = nan;

var template = `Template literal`;
console.log(template);

var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template);

var first = 'Ung-mo';
var last = 'Lee';

console.log('My name is ' + first + ' ' + last + '.')

var first = 'Ung-mo';
var last = 'Lee';

console.log(`My name is ${first} ${last}.`)
// My name is Ung-mo Lee.
console.log(`1 + 2 = ${1 + 2}`);
// 1 + 2 = 3
console.log('1 + 2 = ${1 + 2}');
// 1 + 2 = ${1 + 2}

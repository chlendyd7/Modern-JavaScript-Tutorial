var x = 'global';

function foo() {
    console.log(x); //undefined
    var x = 'local';
}

foo();
console.log(x);

var MYAPP = {};
MYAPP.name = 'Lee';
console.log(MYAPP.name);

var Counter = (function() {
    //private 변수
    var num = 0;
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log(Counter.num);
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());


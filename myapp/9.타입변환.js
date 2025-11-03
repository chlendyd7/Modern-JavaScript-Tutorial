var x = 10;
var str = x.toString();
console.log(typeof str, str);
// string 10
console.log(typeof x, x);
// number 10

var str = x + '';
console.log(typeof str, str)
// string 10

function getStringLnegth(str) {
    str = str || '';
    return str.length;
}

// ES6의 매개변수 기본값 설정
function getStringLength(str ='') {
    return str.length;
}

console.log(getStringLnegth());
console.log(getStringLnegth('hi'));

// 옵셔널 체이닝 연산자
var elem = null;

var value = elem?.value;
console.log(value);

var value = elem && str.value;
console.log(value);

var str = '';
var length = str && str.length;
console.log(length);

var str = '';

var length = str?.length;
console.log(length)

var foo = null ?? 'default string';
console.log(foo);
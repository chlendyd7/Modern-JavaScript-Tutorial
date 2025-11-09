const x = 1;
function outerFunc() {
    const x = 10;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}
outerFunc(); //10

const x1 = 1;
function foo() {
	const x1 = 10;
	bar();
}

function bar() {
	console.log(x1);
}

foo(); //1
bar(); //1

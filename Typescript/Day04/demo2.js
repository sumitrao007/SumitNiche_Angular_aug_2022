// add1();
// Functions
// 1  Function without parameter & without return type
// 2  Function with parameter & without return type
// 3  Function without parameter & with return type
// 4  Function with parameter & with return type
// 1  Function without parameter & without return type
function add1() {
    console.log("U r in first type of function");
}
// 2  Function with parameter & without return type
function add2(a, b) {
    console.log("Addition is ".concat(a + b));
}
// add2(10,2)
// 3  Function without parameter & with return type
function add3() {
    return (8 + 8);
}
// let temp=add3();
// console.log("Addition is "+temp);
// 4  Function with parameter & with return type
function add4(a, b) {
    return (a + b);
}
// console.log(`Addition is ${add4(10,9)}`)
function add5(a, b) {
    return (a + b);
}
console.log("Addition is ".concat(add5(11, 10)));

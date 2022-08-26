//derefence of array
var _a;
var a = [4, 5, 6, 7];
var t1 = a[0], t2 = a[1], t3 = a[2], t4 = a[3];
// console.log(`
//     t1 = ${t1}
//     t2 = ${t2}
//     t3 = ${t3}
//     t4 = ${t4}
// `)
var s1 = a[0], s2 = a.slice(1);
// console.log(`
//     s1 = ${s1}
//     s2 = ${s2.join("  ")}
// `)
//How to return multiple values from function (Interview Question) 
function Operation(a, b) {
    return [a + b, a - b, a * b];
}
var _b = Operation(5, 3), add = _b[0], sub = _b[1], mul = _b[2];
// console.log(`
//     Addition = ${add}
//     Substraction = ${sub}
//     Multiplication = ${mul}
// `)
// How to swap value without using 3rd variable (Interview Question) 
// 1 addition & substraction
// 2 multiplication & division
// 3 Xor 
// 4 using array dereferncing 
var b = 10;
var c = 20;
console.log("\n        Before Swap \n        b= ".concat(b, "\n        c= ").concat(c, "\n    "));
_a = [c, b], b = _a[0], c = _a[1];
console.log("\n    After Swap \n    b= ".concat(b, "\n    c= ").concat(c, "\n"));

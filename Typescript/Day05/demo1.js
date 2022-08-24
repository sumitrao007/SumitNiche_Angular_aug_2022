//Anonymous function
// function does not have any name
var temp1 = function () {
    console.log("Anonymous function is called");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(2, 5);
// console.log("Result is "+res);
// Fat arrow function/ Arrow function
var temp3 = function () {
    console.log("1st Type of Arrow Function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
console.log("Addition is " + temp4(8, 10));

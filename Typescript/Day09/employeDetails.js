"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, sal, role) {
        this.fname = f;
        this.lname = l;
        this.sal = sal;
        this.dept = new department_1.Department(role); //it creates a object
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n            First Name:: ".concat(this.fname, "\n            Last name :: ").concat(this.lname, "\n            Salary    :: ").concat(this.sal, "\n            Department:: ").concat(this.dept.getRole(), "\n        "));
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;

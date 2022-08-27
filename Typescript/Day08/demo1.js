"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    // constructor(){
    //   this.fname='';
    //   this.id=0;
    //   this.lname='';
    // }
    function Myclass(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    Myclass.prototype.display = function () {
        console.log("\n        First name :: ".concat(this.fname, "\n        last name  :: ").concat(this.lname, "\n        ID         :: ").concat(this.id, "\n      "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass("Sumit","Raokhande",9);
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;

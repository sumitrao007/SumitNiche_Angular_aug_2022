// while loop
var count = 5;
// while(count!=0){
//   console.log("Count is "+count);
//   count--;
// }
// do{
//   console.log("Count is "+count);
//   count--;
// }while(count!=0)
//for loop 
// for(var i=0;i<5;i++){
//   console.log(`Value of i is ${i}`)
// }
// console.log("After the loop "+i);
// var => has scope is global 
// let => It has scope within nearest block=> func,for loop ,file=> {}
for (var i = 0; i < 5; i++) {
    console.log("----- Value of i is " + i);
}
console.log("After the loop " + i);

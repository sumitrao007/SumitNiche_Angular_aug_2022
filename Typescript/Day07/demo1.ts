//derefence of array

let a:number[]=[4,5,6,7];

let [t1,t2,t3,t4]=a;
// console.log(`
//     t1 = ${t1}
//     t2 = ${t2}
//     t3 = ${t3}
//     t4 = ${t4}
// `)

let [s1,...s2]=a;
// console.log(`
//     s1 = ${s1}
//     s2 = ${s2.join("  ")}
// `)

//How to return multiple values from function (Interview Question) 

function Operation(a:number,b:number){

    return [a+b,a-b,a*b];
}

  let [add,sub,mul]= Operation(5,3);

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

    let b=10;
    let c=20;

    console.log(`
        Before Swap 
        b= ${b}
        c= ${c}
    `);

    [b,c]=[c,b];

    console.log(`
    After Swap 
    b= ${b}
    c= ${c}
  `);

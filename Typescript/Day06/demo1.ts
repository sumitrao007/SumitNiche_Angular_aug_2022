//foreach method

let a:number[]=[4,5,6,7];

// a.forEach((myvalue,i)=>{
//   console.log("My value is "+myvalue+ " & index is "+i)
// })

// rest parameter function

  function display(...item:number[]){
    console.log(item)
  }

  // display(4,5,99,78,100);

  // rest parameter should be last parameter
  function display1(a:string,...item:number[]){
    console.log("Value of a is "+a);
    console.log(item)
  }

  // display1('Sumit',200,80,74,52,12,36);

  // push & pop method
  // It works on LIFO principal => Last in first out
  let a1:number[]=[];

  // a1.push(45);
  // console.log(a1);
  // a1.push(100,201,85,90);
  // console.log(a1)
  // let res=a1.pop();
  // console.log(a1);
  // console.log("Poped value is "+res)

  //Splice method
  // particular index  value add & remove 
  let b:number[]=[7,4,55,2,9];

  // console.log(b);
  // b.splice(3,0,100);  
  // console.log(b);
  // b.splice(2,0,201,300)
  // console.log(b);
  // b.splice(3,1);
  // console.log(b);
  // b.splice(2,2)
  // console.log(b);
  // b.splice(3,1,99);
  // console.log(b);
  // b.splice(1,1,500,800);
  // console.log(b);

  // slice method
  // it is used to copy a section of data

  let c:string[]=['Angular 8','React js','Embber js','Vue js','JSP','HTML+CSS+JS+Jquery'];
  // let temp=c.slice(1,4)
  // console.log(temp);
  // let temp2=c.slice(1);
  // console.log(temp2);
  // let temp3=c.slice();
  // console.log(temp3);

  //Map Method

  let d=[2,3,4,5,6];

  let res1=d.map((myvalue)=>{
    return (myvalue*myvalue)
  });

  console.log("Original array "+d.join(' '));
  console.log("Square operation is "+res1.join(' # '))


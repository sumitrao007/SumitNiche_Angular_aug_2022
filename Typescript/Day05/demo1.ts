//Anonymous function
// function does not have any name
  let temp1=function (){
    console.log("Anonymous function is called")
  }

  // temp1();

    let temp2=function (a:number,b:number):number{
        return (a+b);
    }

      let res=temp2(2,5)
      // console.log("Result is "+res);

      // Fat arrow function/ Arrow function

         let temp3= ()=>{
            console.log("1st Type of Arrow Function is called")
          }

          // temp3();

          let temp4= (a:number,b:number):number=>{
            return (a+b);
          }

          console.log("Addition is "+temp4(8,10));
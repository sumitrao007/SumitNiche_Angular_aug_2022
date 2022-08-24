//optional parameter Functions

  function add1(a:number,b?:number){

      console.log("Value of a "+a);//5
      console.log("Value of b "+b) // 4
      console.log("Value of a+b "+(a+b!)); // 9
  }

  // add1(5);
  // add1(5,4);

  //rule =>if u create a parameter as optional then after that parameter to make it as optional of each parameter mandatory
  function add2(c:number,a?:number,b?:number){

    console.log("Value of a "+a);//5
    console.log("Value of b "+b) // 4
    console.log("Value of a+b "+(a!+b!)); // 9
}

// add2(4)


//default parameter function

// internally it is called optional parameter function

function add3(a:number,b:number=8){
  console.log("Value of a "+a);//2
  console.log("Value of b "+b) // 11
  console.log("Value of a+b "+(a+b)); // 13
}

//add3(2);
// add3(2,11);

function add4(a:number=7,b:number){
  console.log("Value of a "+a);//2
  console.log("Value of b "+b) // 11
  console.log("Value of a+b "+(a+b)); // 13
}

// add4(2,10)

function add5(a:number=7,b?:number){
  console.log("Value of a "+a);//7
  console.log("Value of b "+b) //undefine
  console.log("Value of a+b "+(a+b!)); // nan
}

add5();
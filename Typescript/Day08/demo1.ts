export class Myclass{

    private fname:string;
     id:number;
    protected lname:string;

    // constructor(){
    //   this.fname='';
    //   this.id=0;
    //   this.lname='';
    // }

    constructor(fname:string,lname:string,id:number){
        this.fname=fname;
        this.lname=lname;
        this.id=id;

    }

    display(){
      console.log(`
        First name :: ${this.fname}
        last name  :: ${this.lname}
        ID         :: ${this.id}
      `)
    }

}

// let obj=new Myclass("Sumit","Raokhande",9);
// obj.display();

export function add(a:number,b:number):number{
  return (a+b);
}

export const pi=3.14;




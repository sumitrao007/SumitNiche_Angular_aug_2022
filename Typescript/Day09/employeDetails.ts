
import {Employee} from './employee';
import {Department} from './department';

export class EmployeeDetails implements Employee{

      fname: string
      lname:string;
      sal:number;
      dept:Department;  // It creates refernce of dpartment 

      constructor(f:string,l:string,sal:number,role:string){
            this.fname=f;
            this.lname=l;
            this.sal=sal;
            this.dept=new Department(role); //it creates a object
      }

      display(){
        console.log(`
            First Name:: ${this.fname}
            Last name :: ${this.lname}
            Salary    :: ${this.sal}
            Department:: ${this.dept.getRole()}
        `)
      }
}

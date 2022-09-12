import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

    result!:number;
    name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onSend(myname:any){
    console.log(myname);
    console.log(myname.value)
    myname.style.background='green';
    myname.style.color='white';
  }

  onSend1(mydata:any){
    console.log(mydata);
  }

  onAddition(num1:any,num2:any){
    let n1=+num1;
    let n2=+num2;

    // this.result=num1+num2;
    this.result=n1+n2;
    
  }

  onChange(myname:any){
    console.log("Change event Occur!!!")
    console.log("Data is "+myname.value);
    myname.style.background='blue';
    myname.style.color='white';
  }

  onKeyUp(){
    console.log("Key Up event Occur...")
  }

  onKeyDown(){
    console.log("Key Down event Occur...")
  }

}

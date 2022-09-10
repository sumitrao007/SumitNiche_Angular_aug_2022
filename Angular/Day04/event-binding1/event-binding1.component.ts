import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  count:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    if(this.count==true){
      console.log("Click event occur...");
      this.count=false;
    }    
    
  }

  onImageClick(){
    console.log("On Image click ....")
  }

  onSend(myevent:any){
    console.log(myevent);
    console.log(myevent.target.value);
  }

}

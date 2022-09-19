import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childstrData=new EventEmitter();

  @Output() childArrData=new EventEmitter();

  strdata:string='Angular 12 from sumit';

  arrprod:any[]=[
    {
      name:'Motorolla',
      price:25000,
      qty:1
    },
    {
      name:'Samsung',
      price:15000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'One Plus',
      price:35000,
      qty:1
    }

  ]



  constructor() { }

  ngOnInit(): void {
  }

  onSendData(){
    this.childstrData.emit(this.strdata);
    this.childArrData.emit(this.arrprod);
  }

}

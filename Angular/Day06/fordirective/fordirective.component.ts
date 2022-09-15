import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 12','React Js','Vue Js','Embber Js','JSP'];

  arrprod=[
    {
      productname:"Samsung",
      price:20000,
      quantity:1
      
    },
    {
      productname:"Motorola",
      price:25000,
      quantity:1
      
    },
    {
      productname:"One Plus",
      price:35000,
      quantity:1
      
    },
    {
      productname:"Realme",
      price:18000,
      quantity:1
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(){
    console.log("Mouse over event Occur...")
  }

}

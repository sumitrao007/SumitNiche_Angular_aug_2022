import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

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

  selected:string='';
  agecal:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over event Occur...")
    this.selected=item.productname;

  }

  onMouseout(){
    this.selected='';
  }

  onGet(datevalue:string){
    console.log(datevalue);
    let temp=datevalue.split('-')
    console.log(temp);

    let mydate=new Date();
    let year=mydate.getFullYear();
    console.log(year);
    this.agecal=year-(+temp[0]);

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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

  

}

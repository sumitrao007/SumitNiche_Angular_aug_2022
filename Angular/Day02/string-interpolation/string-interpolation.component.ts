import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sumit raokhande';
  num1:number=4;

  imgurl:string='../../assets/bg.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}

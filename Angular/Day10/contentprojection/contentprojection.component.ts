import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent implements OnInit {

    // inputtag:string='Email<input type="text" placeholder="Enter the email">'

    // inputtag:string='<h1>Hi welcome to my Angular Tutor</h1>'

    hintmsg:string='Email Id Hint message'

  constructor() { }

  ngOnInit(): void {
  }

  onchange(myevent:any){
    console.log(myevent.target.value);
  }

}

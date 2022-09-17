import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Send data from Parent';

  jsonobj={
    fname:'sumit',
    lname:'Raokhande',
    id:9
  }
  strName:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(inputname:string){
      this.strName=inputname;
  }

}

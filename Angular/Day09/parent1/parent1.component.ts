import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,AfterViewInit {

  @ViewChild('htmldiv') Mydiv!:ElementRef;

  @ViewChild(Child3Component) childComp!:Child3Component;

  constructor() { }
  

  ngOnInit(): void {
      console.log(this.Mydiv);
  }

  ngAfterViewInit(): void {
    console.log(this.Mydiv);
    this.Mydiv.nativeElement.classList='mydivclass';
  }

  OnChildProperty(){
      this.childComp.username='Sumit Raokhande';
  }

  onChildMethodAccess(){
      this.childComp.onDisplay();
  }

}

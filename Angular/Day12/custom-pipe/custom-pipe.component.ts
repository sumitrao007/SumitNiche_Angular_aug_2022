import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quod laboriosam impedit dicta voluptate sequi iusto facilis, nemo placeat. Earum, voluptatibus. Velit hic iste, aliquam quis autem accusamus possimus accusantium?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quod laboriosam impedit dicta voluptate sequi iusto facilis, nemo placeat. Earum, voluptatibus. Velit hic iste, aliquam quis autem accusamus possimus accusantium?';
  constructor() { }

  ngOnInit(): void {
  }

}

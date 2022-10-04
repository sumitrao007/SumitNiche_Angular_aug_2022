import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  dataRecived:string='';
  constructor(private notifyservice:NotificationService) { }

  ngOnInit(): void {
    this.GetEmitedData();
  }
  GetEmitedData(){
      this.notifyservice.notification
      .subscribe((data)=>{
          // this.dataRecived=(<string>data);

          this.dataRecived=data;

      })
  }

}

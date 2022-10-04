import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  strDataReceived:string='';
  constructor(private route:ActivatedRoute,
              private notify:NotificationService) { }

  ngOnInit(): void {
      this.GetParameterFromUrl();
      this.getDataRecieved();
  }

  getDataRecieved(){
      this.notify.notification
      .subscribe((data)=>{
          this.strDataReceived=data;
      })
  }

  GetParameterFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        console.log(param.get('id'))
        console.log(param.get('fname'))
        console.log(param.get('status'))
      })
  }


  onSend(msg:string){
      this.notify.sendMessage(msg);
  }

}

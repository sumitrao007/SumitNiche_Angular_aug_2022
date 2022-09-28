import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number=0;
  title:string='';
  body:string='';
  ishidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetData();

  }

  GetData(){
      this.service.getPost()
      .subscribe((response:any)=>{
          // console.log(response)
          this.posts=response;
      },(myerror)=>{
       // alert("Error Occured....")

        if(myerror.status>=400 && myerror.status<=499){
          alert("Client side Error "+myerror.status)
        }else if(myerror.status>=500 && myerror.status<=599){

          alert("Server side Error")
        }else{
          alert("Error Occured")
        }


      })
  }

  onSend(inputtitle:string,inputbody:string){

    let obj={
      title:inputtitle,
      body:inputbody
    }

      this.service.Postdata(obj)
      .subscribe((response)=>{
        console.log(response);
      })
  }

  onEdit(item:any){

    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false;

  }

  onupdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(obj)
    .subscribe((response)=>{
        console.log(response);
    })

  }

  onDelete(id:any){

      this.service.DeleteData(id)
      .subscribe((response)=>{
        console.log(response)
      })
  }


}

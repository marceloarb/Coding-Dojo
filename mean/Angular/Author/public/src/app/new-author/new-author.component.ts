import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  author:any;
  error:any;
  constructor(private _httpService: HttpService) { }
  

  ngOnInit() {
    this.author = {name:"",quote:""}
    this.error = [];
  }
  show(){
    this._httpService.show().subscribe(data=>{
      this.author = data;
    })
  }
  create(){
    this._httpService.create(this.author).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.author = data;
        this.show();
      }
    })
  }
  

}

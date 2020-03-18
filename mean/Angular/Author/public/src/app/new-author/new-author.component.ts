import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  author:any;
  show_table:boolean;
  constructor(private _httpService: HttpService) { }
  

  ngOnInit() {
    this.author = {name:"",quote:""}
  }
  show(){
    this._httpService.show().subscribe(data=>{
      this.author = data;
    })
  }
  create(){
    this._httpService.create(this.author).subscribe(data=>{
      this.author = data;
      this.show();
    })
  }
  table(){
    this.show_table = false;
  }
  not(){
    this.show_table = true;
  }

}

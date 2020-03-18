import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  id:any;
  author:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.author = {name:"",quote:""};
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      
    })
    this.show_id(this.id);
  }
  
  update(id){
    this._httpService.update(this.id,this.author).subscribe(data=>{
      this.author = data;
    })
  }
  show_id(id){
    this._httpService.show_id(this.id).subscribe(data=>{
      this.author = data;
    })
  }

}

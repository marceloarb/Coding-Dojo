import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author-id',
  templateUrl: './author-id.component.html',
  styleUrls: ['./author-id.component.css']
})
export class AuthorIdComponent implements OnInit {
  id:any;
  num:number;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute){}

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      
    })
    this.show_id(this.id);
  }

  show_id(id){
    this._httpService.show_id(this.id).subscribe(data=>{
      this.id = data;
    })
  }
  delete(id){
    this._httpService.delete(id).subscribe(data=>{
      
    })
  }
  
}

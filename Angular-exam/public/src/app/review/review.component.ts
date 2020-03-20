import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movie:any;
  reviews:any;
  id:any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      
    })
    this.get_movie_id(this.id);
  }
  get_movie_id(id){
    this._httpService.get_movie_id(this.id).subscribe(data=>{
      this.movie = data;
    })
  }
  delete_id(id){
    this._httpService.delete_id(this.id, id).subscribe(data=>{
      this.movie = data;
    })
  }
  delete(id){
    this._httpService.delete(id).subscribe(data=>{
      
    })
  }

}

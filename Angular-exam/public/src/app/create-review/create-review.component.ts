import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  create_review:any;
  error:any;
  id:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      
    })
    this.create_review = {name:"", stars:"", review:""};
    this.error = [];
  }
  postreview(id){
    this._httpService.postreview(this.create_review,this.id).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.create_review = data;
      }
    })
  }

}

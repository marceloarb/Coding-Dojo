import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  create_movie:any;
  error:any;
  @Input() movies:any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.create_movie = {title:"",name:"",stars:0,review:""};
    this.movies = [];
    this.error = [];
  }
  postmovies(){
    this._httpService.postmovies(this.create_movie).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.create_movie = data;
        this._router.navigate(['/'])
      }
    })
  }

}

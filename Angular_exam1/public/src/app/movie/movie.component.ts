import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  create_movie:any;
  movies:any;
  form:boolean ;
  error:any;
  sum:number;
  avg:any;

  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.getmovies();
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

  getmovies(){
    this._httpService.getmovies().subscribe(data=>{
      this.movies = data;
    })
    
  }
  show(){
    this.form = true;
  }
  
  

}

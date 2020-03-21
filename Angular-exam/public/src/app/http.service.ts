import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  getmovies(){
    return this._http.get('/movies');
  }
  postmovies(movie){
    return this._http.post('/movies',movie);
  }
  postreview(review,id){
    return this._http.post('/review/'+id,review);
  }
  get_movie_id(id){
    return this._http.get('/movies/'+id);
  }
  delete(id){
    return this._http.delete('/movie/'+id);
  }
  delete_id(movie_id,id){
    return this._http.delete('/review/'+movie_id+'/'+id);
  }
}

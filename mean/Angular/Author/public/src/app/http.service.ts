import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  show(){
    return this._http.get('/authors')
  }
  show_id(id){
    return this._http.get('authors/'+id+'/edit')
  }

  create(create){
    return this._http.post('/authors',create)
  }
  update(id,update){
    return this._http.put('/authors/'+id,update)
  }
  delete(id){
    return this._http.delete('/authors/'+id);
  }
  vote_up(id){
    return this._http.get('/vote/'+id);
  }
  vote_down(id){
    return this._http.get('/votes/'+id);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient ) { }
  getcake(){
    return this._http.get('/cakes');
  }
  postcake(newcakes){
    console.log(newcakes)
    return this._http.post('/cake/new',newcakes);
  }
  postcomment(id,newcomment){
    return this._http.post('/comment/new/'+id,newcomment);
  }
  edit(id){
    return this._http.get('/cake/'+id)
  }
}

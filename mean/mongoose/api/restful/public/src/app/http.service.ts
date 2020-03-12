import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getTasks(){
    return this._http.get('/tasks');
    }
  postTasks(newtask){
    console.log(newtask)
    return this._http.post('/tasks',newtask);
  }
  getEdit(id){
    return this._http.get('/edit/'+id);
  }
  delete(id){
    return this._http.delete('/delete/'+id);
  }
  edit(id,task){
    return this._http.put('/update/'+id,task);
  }


}

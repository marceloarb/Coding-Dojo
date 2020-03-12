import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks: any;
  task: any;
  newtask: any;
  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.newtask = {"title": ""};
    // this.getTasksFromService()
    // this.postTasks('happy end','kdjfdfasdfasdfasdkdj')
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("got data", data)
      this.tasks = data;
      
    })
  }
  postTasks(){
    let observable = this._httpService.postTasks(this.newtask);
    observable.subscribe(data => {
      this.tasks.push(data)
    });
    
    
  }
  getEdit(id){
    let observable = this._httpService.getEdit(id)
    observable.subscribe(data => {
      this.task = data;
      
    })
  }
  delete(id){
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
      this.getTasksFromService()
      
    })
  }
  edit(id){
    this._httpService.edit(id,this.task).subscribe(data =>{
      this.task = data;
      this.getTasksFromService()
    })
  }

}

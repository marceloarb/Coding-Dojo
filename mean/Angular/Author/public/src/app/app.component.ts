import { Component , OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  authors:any;
  author_id:any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.show();

  }
  show(){
    this._httpService.show().subscribe(data=>{
      this.authors = data;
    })
  }
  show_id(id){
    this._httpService.show_id(id).subscribe(data=>{
      this.author_id = data;
    })
  }
  
}

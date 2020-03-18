import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  authors: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.show();

  }
  show(){
    this._httpService.show().subscribe(data=>{
      this.authors = data;
    })
  }

  
}


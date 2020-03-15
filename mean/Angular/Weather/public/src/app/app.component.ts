import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  weather: any;
  humidity: any;
  temp_avg: any;
  temp_high: any;
  temp_low: any;
  status: any;
  name: any;
  apikey:any;



  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.apikey='chicago';
  }
  
}
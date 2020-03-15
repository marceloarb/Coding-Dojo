import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather:any;
  api = 'dallas';
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}

  ngOnInit() {
  this.getdallas();
  }
  getdallas(){
    this._httpService.getWeather(this.api).subscribe(data=>{
      this.weather = data;
    })
    
  }

}

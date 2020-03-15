import { Component, OnInit,  Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  @Input() weather:any;
  api= 'chicago';
  constructor(private _httpService: HttpService,) { }

  ngOnInit() {
    this.getchicago();
    
  }
  getchicago(){
    this._httpService.getWeather(this.api).subscribe(data=>{
      this.weather = data;
    })
  }

}

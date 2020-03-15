import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  @Input() weather:any;
  api = 'seattle';
  constructor(private _httpService: HttpService,) { }

  ngOnInit() {
    this.getseattle();
  }
  getseattle(){
    this._httpService.getWeather(this.api).subscribe(data=>{
      this.weather = data;
    })
  }

}

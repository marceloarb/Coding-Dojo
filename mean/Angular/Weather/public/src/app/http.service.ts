import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
}

  getWeather(api){
    console.log(api);
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+api+'&appid=e743398f6893e4c490dd4a0b9e1a1587');
    
}
}
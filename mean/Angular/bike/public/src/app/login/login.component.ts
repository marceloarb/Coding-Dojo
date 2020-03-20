import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;
  error:any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.login = {name:"",password:"",email:""}
    this.error = [];
  }

  create(){ 
    
    this._httpService.create(this.login).subscribe(data=>{
      if (data instanceof Array){
        this.error = data;
      }
      else{
        this.login = data;
      }
    })
  }

}

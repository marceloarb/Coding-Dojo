import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes: any;
  cake:any;
  newcakes: any;
  newcomment:any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newcakes = {name:"",img:""};
    this.cakes = [];
    this.newcomment = {stars:0,comment:""};
    this.getcakes();
  }
  getcakes(){
    this._httpService.getcake().subscribe(data=>{
      this.cakes = data;
    })
  }
  postcake(){
    this._httpService.postcake(this.newcakes).subscribe(data=>{
      this.cakes.push(data);
    })
  }
  postcomment(id){
    this._httpService.postcomment(id,this.newcomment).subscribe(data=>{
      
      this.getcakes();
    })
  }
  cakeToShow(x){
    this.cake = x;
    console.log(this.cake);
  }
}

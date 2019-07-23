import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router,
    private http: HttpClient) { }
    baseUrl = environment.baseUrl;

  openPlayerList(){
    this.router.navigate(['playerinfo']);
  }

  getPlayers():Observable<any>{
    console.log(this.baseUrl+'/players');
    return this.http.get(this.baseUrl+'/players');
  }

  getPlayerInfo(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/players/'+id);
  }

}

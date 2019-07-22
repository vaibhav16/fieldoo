import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router,
    private http: HttpClient) { }

  openPlayerList(){
    this.router.navigate(['playerinfo']);
  }


}

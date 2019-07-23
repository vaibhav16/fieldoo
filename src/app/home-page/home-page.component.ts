import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Players } from './../models/players.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: DataService) { }
  playerData: Players;
  baseUrl = "http://demos.sappleserve.com/fieldoo/backend/public/images";
  fetchingData:boolean;
  p: number = 1;

  ngOnInit() {
    window.scroll(0,0);
    this.fetchingData=true;
    console.log(this.baseUrl);
    this.dataService.getPlayers()
    .subscribe((res)=>{
      console.log(res);
      this.playerData = res;
      console.log(this.playerData.data[0]);
      this.fetchingData=false;
      
    })
  }

  playerList(){
    this.dataService.openPlayerList();
  }

}

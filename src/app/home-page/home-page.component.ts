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
  playersData: Players;

  ngOnInit() {
    this.dataService.getPlayers()
    .subscribe((res)=>{
      console.log(res);
      this.playersData = res;
      console.log(this.playersData);
    })
  }

  playerList(){
    this.dataService.openPlayerList();
  }

}

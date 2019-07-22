import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  playerList(){
    this.dataService.openPlayerList();
  }

}

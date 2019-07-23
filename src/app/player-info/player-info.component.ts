import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Player } from './../models/players.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id: number;
  private sub: any;
  playerInfo: Player;
  fetchingData:boolean;
  baseUrl = "http://demos.sappleserve.com/fieldoo/backend/public/images";
  constructor(private route: ActivatedRoute, 
    public sanitizer: DomSanitizer,
    private dataService: DataService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.fetchingData = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.dataService.getPlayerInfo(this.id).subscribe(
        (res)=>{         
          this.playerInfo = res.data;
          console.log(this.playerInfo);          
          this.fetchingData=false;
        }
      );
   });
  }

  getIframeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  

}

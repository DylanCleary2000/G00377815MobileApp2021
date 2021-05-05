import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private storage:Storage,private navctrl:NavController) { }
myFavTeam:String="";
myFavTrack:String="";
myPlacement:String="";
//Retrieves the users "my driver profile" details from storage
  ngOnInit() {
    this.storage.get("team")
    .then((data1)=>{
      this.myFavTeam=data1;

    })
    this.storage.get("track")
    .then((data2)=>{
      this.myFavTrack=data2;
    })
    this.storage.get("placement")
    .then((data3)=>{
      this.myPlacement=data3;
    })
  }

  //Actually stores the details using a "key" and "value"
  storeDetails(){
    this.storage.set('team',this.myFavTeam)
    this.storage.set('track',this.myFavTrack)
    this.storage.set('placement',this.myPlacement)
    .then(()=>{
      this.navctrl.navigateBack('/home');
    })
  }

}

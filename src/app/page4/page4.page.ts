import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { BuildInfo } from '@ionic-native/build-info/ngx';


@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor(private calendar: Calendar,private build:BuildInfo) { }
  msg:String="Calendar Created for Races!";
  err:String="Unable to Create Calendar";
  
  addCalender()
  {
    this.calendar.createCalendar('RaceCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );

    
  }

  displayBuildInfo()
  {
    
      console.log('Supported Platforms' +BuildInfo.platforms)
      
  
  }

  ngOnInit() {
  }

}




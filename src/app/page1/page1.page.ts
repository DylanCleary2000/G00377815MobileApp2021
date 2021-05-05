import { Component, OnInit } from '@angular/core';
import {DriversService} from '../Services/drivers.service'//Custom made service to read in JSON data 

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  driver:any=[];

  constructor(private service:DriversService) { }

  ngOnInit() {//on start of app, data will be read in from the driver service.
    this.service.GetDriverData().subscribe( (data)=>{
    this.driver = data.Drivers;
    console.log(this.driver);
    });
  }

}

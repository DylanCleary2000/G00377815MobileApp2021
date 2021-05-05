import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
//Additional Imports
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';//Http client allowing for reading JSON data from an external URL
import {IonicStorageModule} from '@ionic/storage';//Allows for use of ionic storage for data persistence
import { Calendar } from '@ionic-native/calendar/ngx';//Allows the user to create a calender to store events into(ionic/cordova plugin)
import { BuildInfo } from '@ionic-native/build-info/ngx';//Allows the user to check buildinfo in the console (ionic/cordova plugin)



//Had to make sure to include calander/buildinfo in the providers
//Also had to make sure to include the HTTPClientModule and IonicStorageModule in the imports 
//This allows for ionic to see that we can utilize them
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Calendar,BuildInfo], //videoplayer was here
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//importing the HTTP client for use
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http:HttpClient) { }

  GetDriverData():Observable<any>
  {
   return this.http.get('https://jsonblob.com/api/jsonblob/d1a54090-acdd-11eb-8e44-8761efd293de');//link to the JSON data
  }
}

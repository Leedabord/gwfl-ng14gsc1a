import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly httpURL = 
    'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Scores?api_key=key66fQg5IghIIQmb';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpC: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpC.get<any>(this.httpURL, this.httpOptions);
  }

}
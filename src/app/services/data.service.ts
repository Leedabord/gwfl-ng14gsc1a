import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly httpURL = 
    'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Scores/';
 
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer 251016:: patgbCJgQnURgkXpI.ff953c0a0c9a6bd81bdfeda28ec62a40613e0fb5c8d86d5cb089fb4688b0b219' 
       })
  }

  constructor(private httpC: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpC.get<any>(this.httpURL, this.httpOptions);
  }

}

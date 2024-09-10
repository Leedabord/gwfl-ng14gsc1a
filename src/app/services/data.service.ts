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
         'Authorization': 'Bearer patgbCJgQnURgkXpI.f72c7c10a614e68e2ba92c6e7a437e64312719fe9ad7f7c38b05164dfe445a32'
       })
  }

  constructor(private httpC: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpC.get<any>(this.httpURL, this.httpOptions);
  }

}
//External imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Internal imports
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiHttpCallService {

  constructor(private http: HttpClient) { }

  getJsonDataList(): Observable<any> {
    return this.http.get(`${environment.apiurl}posts`);
  }

  getCrudDataList(): Observable<any> {
    return this.http.get(`${environment.apiurl}posts/1/comments`);
  }
}

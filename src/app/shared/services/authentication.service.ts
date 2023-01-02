//Note : not completely develop service it is example that is need every angular project
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUserDetails:any;

  constructor() { }

  public loginApiCall(){
    //manage localstorage and api calling here and maintance current user login state 
  }

  public getCurrentUser(){
    return this.currentUserDetails;
  }
}

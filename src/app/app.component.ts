//External imports
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLogin: boolean = false; //variable is used to detect user login or not and return boolean value 

  constructor(private router: Router) {
    this.router.events.subscribe(router => {
      if (router instanceof NavigationEnd) {
        //get current login user details s
        const getCurrentUserDetails: any = localStorage.getItem('currentLoginUser');
        const currentUser = JSON.parse(getCurrentUserDetails);
        this.isLogin = !currentUser?.username ? false : true; //assign isLogin user value
        if (!this.isLogin) { //if user not login redirect to login page
          this.router.navigate(['/login']);
        } else if (this.router.url === '/login' && this.isLogin) { //if user login and try to enter login in url then is redirect dashboard screen
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }
}

//External imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public currentUserData = { username: '' }; //variable is used for set current user data

  constructor(config: NgbDropdownConfig, private router: Router, private toasterService: ToastrService) {
    config.placement = 'bottom-right';
  }

  public toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      const sidebar: any = document?.getElementsByClassName('sidebar sidebar-offcanvas');
      if (sidebar[0]?.className === 'sidebar sidebar-offcanvas') {
        sidebar[0].className = 'sidebar sidebar-offcanvas active';
      }
    } else {
      const sidebar: any = document?.getElementsByClassName('sidebar sidebar-offcanvas active');
      if (sidebar[0]?.className === 'sidebar sidebar-offcanvas active') {
        sidebar[0].className = 'sidebar sidebar-offcanvas';
      }
    }
  }

  //this method is used for logout clear the current user data 
  public logout() {
    localStorage.removeItem('currentLoginUser');
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toasterService.success('Logout successfully');
  }

  ngOnInit() {
    //set current user login data 
    const getCurrentUserDetails: any = localStorage.getItem('currentLoginUser');
    this.currentUserData = JSON.parse(getCurrentUserDetails);
  }

}

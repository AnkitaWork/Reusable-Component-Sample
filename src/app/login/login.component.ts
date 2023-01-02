//External imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//Internal imports
import { constants } from '../shared/constants/form-constant';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public currentYear = new Date().getFullYear(); //variable is used for set current year value
  public fields:any = []; //store json configue value in this variable 
  
  constructor(private router: Router,private toastr: ToastrService) { }

  //method is used for login user valid or not
  public login(formData: any) {
    //currently it is static username and password but here need to call api login and pass data to api
    if (formData?.username?.toLowerCase() === 'admin' && formData?.password?.toLowerCase() === 'admin') {
      //authentication service is used for setting current user data when api response coming successfully 
      localStorage.clear();
      localStorage.setItem('currentLoginUser', JSON.stringify(formData));
      this.router.navigate(['/dashboard']); //navigate to dashboard page
      this.toastr.success('Login successfull!');//displaying toster msg
    } else {
      this.toastr.error('User does not exists!');//displaying error msg
    }
  }

  ngOnInit(): void {
    this.fields = constants.loginForm;//assign value
  }

}

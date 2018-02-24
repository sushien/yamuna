import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService';
import { UtilFunctions } from '../../utils/utilFunctions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  // user: User;
  loginFormObj: User;
  errorObj:any = {};
  constructor(private router: Router, private _usrSer: UserService) {
    this.initializeUser();
   }

  ngOnInit() {
    UtilFunctions.clearLocalStorage();
  }

  initializeUser(){
    this.loginFormObj = new User();
  }
 loginUser() {
   if(Object.keys(this.loginFormObj).length <= 0) {
      return false;
   }
   if (this.loginFormObj.loginName == 'horst' && this.loginFormObj.userPassword == 'abc123') {
      UtilFunctions.setLocalStorage('userDetail','horst');
      this.router.navigate(['/dashboard']);
   } else {
    this.initializeUser();
     this.errorObj = {
      hasError: true,
      errorMsg: 'Username or Password is incorrect'
     };

   }
  //  this._usrSer.loginUser(data).then((res) => {
  //   if (res.Status) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.submitted = true;
  //     this.router.navigate(['/login']);
  //   }
  //  }, (resErr) => {
  //   console.log(resErr);
  //  });
 }
}

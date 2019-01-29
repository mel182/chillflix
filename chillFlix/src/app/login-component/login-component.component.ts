import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  public user_name = "";
  public password = "";
  public indicator = "";


  constructor(public router:Router) { }

  ngOnInit() {
    console.log('token: ',localStorage.getItem('access_token'));

  }

  login(){

    if(this.user_name == '' || this.password == ''){
      this.indicator = 'Invalid credentials';
    }else if(this.user_name == 'admin' && this.password == 'admin'){
      localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTUxNTIwODAwfQ.rwRpEFnmICw_ovUWj-60KimzUl3N605AXL9YK9kzvXE');
      this.indicator = 'Logged in';
      console.log('Token generated: '+localStorage.getItem('token'))
      this.router.navigate(['add']);
    }else{
      this.indicator = 'UnAuthorizated!';
    }
  }
}

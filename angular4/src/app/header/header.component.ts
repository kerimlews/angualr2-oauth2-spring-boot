import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';
import {AuthServiceService} from '../authServices/auth-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  token = localStorage.getItem('token');
  auth = false;
  constructor(
    private headerService: HeaderService,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null && localStorage.getItem('token') != ''){
      if(this.headerService.isAuth(localStorage.getItem('token'))){ 
          this.auth = true
        }else{
          this.auth = false
        }
    }else{
     this.authService.token.subscribe(
       (token) => {
         if(this.headerService.isAuth(token)){
          this.auth = true
        }else{
          this.auth = false
        }
       }
     )
    }
  }
  logout(){
    this.authService.logout()
    this.auth = false;
  }
  }


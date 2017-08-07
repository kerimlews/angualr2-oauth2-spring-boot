import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../authServices/auth-service.service';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(
    private authService: AuthServiceService,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  login(){
    this.authService.getToken(this.username,this.password)
}
}

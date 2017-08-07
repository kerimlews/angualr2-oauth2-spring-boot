import { Injectable } from '@angular/core';
import { AuthServiceService } from '../authServices/auth-service.service';

@Injectable()
export class HeaderService { 

  constructor(
    private auth: AuthServiceService
  ) { }
  isAuth(token){
    if(this.auth.chechToken(token)){
      return true
    }else{
      return false
    }
    }
}
import { Injectable , OnInit} from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from './auth-service.service';
@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(
    private router: Router,
    private auth: AuthServiceService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var token = localStorage.getItem('token');
    if(token!=null && token!=''){
       if(this.auth.chechToken(token)){
         return true
       }else{
         this.router.navigate["/login"]
         return false
       }
    }
}
}

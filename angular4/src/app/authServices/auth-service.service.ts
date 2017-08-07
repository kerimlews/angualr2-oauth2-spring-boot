import { Injectable } from '@angular/core';
import {Response,Http,Headers} from '@angular/http';
import {Router} from '@angular/router'
import {Subject } from 'rxjs/Subject';
@Injectable()
export class AuthServiceService {
  base_url = 'http://localhost:8080';
  token = new Subject();
  constructor(
    private http: Http,
    private router: Router
  ) { }
  chechToken(token) {
    var header = new Headers({
    "authorization": "Basic " + btoa('my-trusted-client:secret'),
    "cache-control": "no-cache",
    'Content-type' : 'application/x-www-form-urlencoded'
  } )
   return this.http.get(this.base_url+'/oauth/check_token?token='+token,{headers: header})
    .subscribe(
      (response: Response) => {
        if(response.json().user_name != null && response.json().user_name != '' ){ return true } else { return false }
      }
    );
  }
  getToken(username, password) {
    var data = {
      'username': 'kerim',
      'password' : 'lews',
      'grant_type': 'password' 
    }
    var header = new Headers({
    "authorization": "Basic " + btoa('my-trusted-client:secret'),
    "cache-control": "no-cache",
    'Content-type' : 'application/x-www-form-urlencoded'
  } )
  this.http.post(
      this.base_url +'/oauth/token?grant_type=password&username='+username+'&password='+password,data,{headers: header, withCredentials: true}
    ).subscribe(
        (response: Response) => {
            localStorage.setItem('token',response.json().access_token)
            this.token.next(response.json().access_token)
        });
  };
  logout (){
    localStorage.clear();
    this.router.navigate["/home"]
  }

}

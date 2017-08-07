import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ImageService{
  emit = new Subject();
  constructor(
    private http: Http
  ) { }
    getAllImages(token) {
     this.http.get('http://localhost:8080/getAllImages?access_token='+ token)
      .subscribe(
        (response: Response) => {
          this.emit.next(response.json())
        })
      }
  }


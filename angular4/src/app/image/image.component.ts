import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { AuthServiceService } from '../authServices/auth-service.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [ ImageService ]
})
export class ImageComponent implements OnInit {
  images
  constructor(
    private imageService: ImageService,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
        var token = localStorage.getItem('token')
         this.imageService.getAllImages(token);
         this.imageService.emit.subscribe(
           (data: any[]) => {
             this.images = data
           }
         )
  }

}

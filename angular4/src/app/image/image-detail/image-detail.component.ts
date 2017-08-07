import { Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  @Input() image;
  constructor(
  ) { }

  ngOnInit() {
  }

}

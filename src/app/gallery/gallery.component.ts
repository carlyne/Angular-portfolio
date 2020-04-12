import { Component, OnInit } from '@angular/core';
import { GalleryItemsData } from '../services/galleryItemsData.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryItemsThumbnails = [];

  constructor(private galleryItemsData: GalleryItemsData) {}

  ngOnInit(): void {
    this.galleryItemsThumbnails = this.galleryItemsData.itemsThumbnails;
  }

  isQuoteCategory(itemInfo) {
    if(itemInfo.category == 'quote') {
      return true;
    } else {
       return false;
    }
  }

  getTexBg() {
    const image = document.querySelector('figure img:last-child');
    console.log(image);
  }

  getCategoryStyle(itemInfo) {


    switch(itemInfo.category){
      case 'illustration' :
        this.getTexBg();
        return 'item--illus';
        break;
      case 'project':
        return 'item--project';
        break;
      case 'quote':
        return 'item--quote';
    }
  }

  getLink(itemInfo) {
    console.log(itemInfo);
  }
}
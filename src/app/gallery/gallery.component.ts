import { Component, OnInit } from '@angular/core';
import { GalleryItemsData } from '../services/galleryItemsData.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryItemsThumbnails = [];
  
  constructor(private galleryItemsData: GalleryItemsData) { }

  ngOnInit(): void {
    this.galleryItemsThumbnails = this.galleryItemsData.itemsThumbnails;
  }

  getRandomStyleSizing() {
    const sizes = ["w--sm", "w--md", "w--lg"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  isQuoteCategory(itemInfo) {
    if(itemInfo.category == 'quote') {
      return true;
    } else {
       return false;
    }
  }

  getCategoryStyle(itemInfo) {
    switch(itemInfo.category){
      case 'illustration' :
        return 'item--illus';
        break;
      case 'project':
        return 'item--project';
        break;
      case 'quote':
        return 'item--quote';
    }
  }
}

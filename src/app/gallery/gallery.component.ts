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

  getTexBg(itemInfo) {
    let img = document.querySelector('figure img:last-child'); 
    img.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'><text x='20px' y='50%' fill='white' font-size='30' font-family='inherit'>${itemInfo}</text></svg>")`
  }

  getCategoryStyle(itemInfo) {
    switch(itemInfo.category){
      case 'illustration' :
        this.getTexBg(itemInfo.name);
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
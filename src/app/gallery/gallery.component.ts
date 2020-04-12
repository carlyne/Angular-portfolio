import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
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

  getTexBg(itemIndex, itemInfo) {
    $(document).ready(function(){
      let $item = $('figure img, figure div');
      if( itemInfo != null ) {
        $item.eq((itemIndex) - 1).css('backgroundImage', `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'><text x='20px' y='50%' fill='white' font-size='30' font-family='inherit'>`+itemInfo+`</text></svg>")`);
      }
     });
  }

  getCategoryStyle(itemInfo) {
    this.getTexBg(itemInfo.id, itemInfo.name);

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

  getLink(itemInfo) {
    console.log(itemInfo);
  }
}
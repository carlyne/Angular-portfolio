import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() item;

  quoteItem = false;

  constructor() { }

  ngOnInit(): void {
  }

  getRandomStyleSizing() {
    const sizes = ["w--sm", "w--md", "w--lg"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  getCategoryStyle(itemInfo) {
    switch(itemInfo.category){
      case 'illustration' :
        this.quoteItem = false;
        return 'item--illus';
        break;
      case 'project':
        this.quoteItem = false;
        return 'item--project';
        break;
      case 'quote':
        this.quoteItem = true;
        return 'item--quote';
    }
  }
}

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
}

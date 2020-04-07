import { Component, OnInit } from '@angular/core';
import { GalleryItemsData } from '../services/galleryItemsData.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project : any;

  constructor(private galleryItemsData: GalleryItemsData, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    const id = this.route.params.subscribe(params => {
        console.log(params.id);
        this.project = this.galleryItemsData.getItemThumbnailById(params.id);
        console.log(this.galleryItemsData.getItemThumbnailById(params.id));
        console.log(this.project);
    });
  }

}

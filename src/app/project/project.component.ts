import { Component, OnInit } from '@angular/core';
import { GalleryItemsData } from '../services/galleryItemsData.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private galleryItemsData: GalleryItemsData, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.currentItem.name = this.route.snapshot.params['id'];
  }

}

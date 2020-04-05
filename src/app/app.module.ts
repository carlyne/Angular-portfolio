import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SortNavComponent } from './sort-nav/sort-nav.component';
import { GalleryItemsData } from './services/galleryItemsData.service';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SortNavComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GalleryItemsData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

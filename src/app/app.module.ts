import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SortNavComponent } from './sort-nav/sort-nav.component';
import { GalleryItemsData } from './services/galleryItemsData.service';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: '', component: GalleryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SortNavComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GalleryItemsData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

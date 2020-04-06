import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SortNavComponent } from './sort-nav/sort-nav.component';
import { GalleryItemsData } from './services/galleryItemsData.service';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: '', component: GalleryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SortNavComponent,
    ProjectComponent
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

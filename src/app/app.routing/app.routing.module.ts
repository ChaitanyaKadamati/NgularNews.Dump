import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { PostsComponent } from '../posts/posts.component';
import { ContainerComponent } from '../container/container.component';
import { DataSharingComponent } from '../data-sharing/data-sharing.component';

const routes: Routes = [
  { path: 'container', component: ContainerComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'data-sharing', component: DataSharingComponent },
  { path: '', component: PostsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
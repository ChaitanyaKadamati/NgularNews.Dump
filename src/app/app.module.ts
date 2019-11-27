import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatModule } from 'src/assets/ng-mat/ng-mat.module';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NewsHeadlinesPipe } from './pipes/news-headlines.pipe';
import { ContainerComponent } from './container/container.component';
import { PostsComponent } from './posts/posts.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { AppRoutingModule } from './app.routing/app.routing.module';
import { CompAComponent } from './data-sharing/comp-a/comp-a.component';
import { CompBComponent } from './data-sharing/comp-b/comp-b.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JwPaginationComponent,
    NewsHeadlinesPipe,
    ContainerComponent,
    PostsComponent,
    DataSharingComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMatModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

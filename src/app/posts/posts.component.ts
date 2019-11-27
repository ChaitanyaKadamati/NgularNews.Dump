import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../services/news.service';

import { news } from '../model/news';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  newItems: Array<news> = null;
  newsSubscriptionToken = null;
  pageOfItems: Array<any>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsSubscriptionToken = this.newsService.getNews().subscribe(response => {
      this.newItems = response;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  ngOnDestroy(): void {
    this.newsSubscriptionToken.unsubscribe();
  }
}

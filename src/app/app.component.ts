import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from './services/news.service';
import { news } from './model/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'NGular News';
  
  constructor() { }
}

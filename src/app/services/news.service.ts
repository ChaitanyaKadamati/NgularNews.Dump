import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { news } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getNews(): Observable<Array<news>> {
    return this.http.get<Array<news>>(this.newsUrl);
  }
}

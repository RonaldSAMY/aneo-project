import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpService) {
    this.getAllArticles()
  }

  getAllArticles() {
    this.http.get('/articles',{'limit':10}).subscribe(
      (res:any) => {
        let articles:Array<Article> = res.articles
        console.log(articles)
      },
      e => {
        console.log(e)
      }
    )
  }
}


interface Article {
  body:string,
  description:string,
  favorited:boolean,
  favoritesCount:number,
  slug:string,
  taglist:Array<any>,
  title:string,
  createdAt:Date
  updateAt:Date
}
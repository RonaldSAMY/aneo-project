import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Article } from "../interface/interfaces";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  public allArticles: Array<Article> = [];
  public currentArticle:Article = null;

  public totalArticleCount: number = 0;

  public httpReqOnProcess:boolean = false

  constructor(private http: HttpService) {
    //this.getAllArticles();
  }

  getAllArticles(offset:number = 0,cb:Function) {
    this.httpReqOnProcess = true
    console.log('call initated')
    this.http.get("/articles", { limit: 10, offset: offset }).subscribe(
      (res: any) => {
        this.allArticles = res.articles;
        //this.totalArticleCount = res.articlesCount;
        this.httpReqOnProcess = false
        cb(res.articlesCount)
      },
      e => {
        console.log(e);
        this.httpReqOnProcess = false
      }
    );
  }

  getSingleArticle(slug:String) {
    this.currentArticle = null
    let url = "/articles/"+slug
    this.http.get(url,{}).subscribe(
      (res: any) => {
        this.currentArticle = res.article
      },
      e => {
        console.log(e);
      }
    )
  }

  getAutherArticles(author:String,offset:number = 0,cb:Function) {
    this.http.get("/articles", { limit: 10,author:author,offset:offset }).subscribe(
      (res: any) => {
        this.allArticles = res.articles;
        this.totalArticleCount = res.articlesCount;
        console.log(this.totalArticleCount)
      },
      e => {
        console.log(e);
      }
    );
  }

}

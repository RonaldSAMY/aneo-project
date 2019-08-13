import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Article } from "../interface/interfaces";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  public allArticles: Array<Article> = [];

  public totalArticleCount: number = 0;

  constructor(private http: HttpService) {
    this.getAllArticles();
  }

  getAllArticles() {
    this.http.get("/articles", { limit: 10 }).subscribe(
      (res: any) => {
        this.allArticles = res.articles;
        this.totalArticleCount = res.articlesCount;
      },
      e => {
        console.log(e);
      }
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Article, NewArticle, ErrorAneo } from "../interface/interfaces";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ArticleService {

  public articleError:Array<ErrorAneo> = [];

  public allArticles: Array<Article> = [];

  public currentArticle: Article = null;

  public totalArticleCount: number = 0;

  public httpReqOnProcess: boolean = false;

  public searchPage:boolean = false

  public newArticle: NewArticle = {
    body: "",
    description: "",
    tagList: [],
    title: ""
  };

  constructor(private http: HttpService, private routeS:Router) {
  }

 
  /**
   * prends uniquement l'article demander
   * @param slug 
   */
  getSingleArticle(slug: String) {
    this.currentArticle = null;
    let url = "/articles/" + slug;
    this.http.get(url, {}).subscribe(
      (res: any) => {
        this.currentArticle = res.article;
      },
      e => {
        console.log(e);
      }
    );
  }

  /**
   * prends tous les articles 
   * @param offset 
   * @param cb 
   */
  getAllArticles(offset: number = 0, cb: Function) {
    let params = {
      limit: 10,
      offset: offset,
    }
    this.allArticles = []
    this.getArticles(params,cb)
  }

  /**
   * prends les articles de utilisateur
   * @param author 
   * @param offset 
   * @param cb 
   */
  getAutherArticles(author: String, offset: number = 0, cb: Function) {
    let params = {
      limit: 10,
      offset: offset,
      author : author
    }
    this.allArticles = []
    this.getArticles(params,cb)
  }

  /**
   * prends les articles par rapport le tag
   * @param tag 
   * @param offset 
   * @param cb 
   */
  gettagArticle(tag:string,offset: number = 0,cb: Function) {
    let params = {
      limit: 10,
      offset: offset,
      tag : tag
    }
    this.allArticles = []
    this.getArticles(params,cb)
  }

  /**
   * supprime l'article
   * @param slug 
   */
  removeArticle(slug) {
    return this.http.delete('/articles/'+slug)
  }

  /**
   * ce method est appellé par different method 
   * par rapport parameter qu'on veut on appelle ce method
   * ex getAutherArticles,gettagArticle ...
   * @param parameters 
   * @param cb 
   */
  private getArticles(parameters:object = {},cb:Function) {
    this.httpReqOnProcess = true;
    this.http.get("/articles", parameters).subscribe(
      (res: any) => {
        this.allArticles = res.articles;
        this.httpReqOnProcess = false;
        cb(res.articlesCount);
      },
      e => {
        console.log(e);
        this.httpReqOnProcess = false;
      }
    );
  }

  /**
   * ce method est appel pour créé nouvelle article
   */
  addNewArticle() {
    let article = {
      'article':this.newArticle
    };
    this.httpReqOnProcess = true;
    this.http.post(article,'/articles').subscribe(
      (res:any) => {
        this.httpReqOnProcess = false
        this.routeS.navigate(['/article',res.article.slug])
      },e => {
        let err = e.error.errors;
        console.log(err)
        for ( var key in err ) {
          let er:ErrorAneo = {
            field:'',
            msg : []
          };
          er.field = key;
          er.msg = err[key];
          this.articleError.push(er)
        }
        this.httpReqOnProcess = false
      }
    );
  }
}

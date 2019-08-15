import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  public totalPages:number = 1

  public totalArticleCount = 0

  public totalPagesCount = 1

  public currentPage = 1

  public pageCountTable = []

  constructor(private articleS:ArticleService ) { 
    
  }


  public getCurrentPageArticles(page:number,AuterArticals = null) {
    this.currentPage = page
    this.initiateArticle()
    console.log(this.articleS.allArticles)
    if(AuterArticals == null) {
      this.articleS.getAllArticles(this.calculOffset(page),this.totalArticles)
    } else {
      this.articleS.getAutherArticles(AuterArticals,this.calculOffset(page),this.totalArticles)
    }
    
  }

  public initiateArticle() {
    this.articleS.allArticles = []
    this.articleS.totalArticleCount = 0
  }

  public totalArticles = (count:number) => {
    this.totalArticleCount = count
    this.getTotalPagesCount()
    this.getAfficheTable()
  }

  public getTotalPagesCount() {

    let total
    if(this.totalArticleCount < 10) {
      total = 1
    } else {
      total = Math.round(this.totalArticleCount / 10)
    }
    this.totalPagesCount = total
  }

  private calculOffset(page:number) {
    let offset = page - 1
        offset = offset * 10
    return offset
  }

  public getAfficheTable() {
    console.log(this.totalPagesCount)
    let max_total = 6
    let rightCalcul = +this.currentPage+3 > this.totalPagesCount ? true : false
    let leftCalcul = this.currentPage-3 < 1 ? true : false
    this.pageCountTable = []
    let start;
    let stop;
    if(leftCalcul) {
      let diff = 3 - this.currentPage
      start = 1
      stop = +this.currentPage + 3 + diff
    } else if(rightCalcul) {

    } else {
      start = this.currentPage-3
      stop = +this.currentPage+3,1
    }
    console.log(start,stop)
    return this.pageCountTable = this.range(start,stop)
  }

  public range = (start,stop,step =1) => {
    let res = []
    for(let i = start;i<stop;i+=step) {  
      res.push(i)
    }
    return res
  }
  
}

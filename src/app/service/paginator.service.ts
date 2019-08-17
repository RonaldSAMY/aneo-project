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

  /**
   * pour prend l'aricle de la page current
   * @param page 
   * @param AuterArticals 
   */
  public getCurrentPageArticles(page:number,AuterArticals = null) {
    this.currentPage = page
    //this.initiateArticle()
    if(AuterArticals == null) {
      this.articleS.getAllArticles(this.calculOffset(page),this.totalArticles)
    } else {
      this.articleS.getAutherArticles(AuterArticals,this.calculOffset(page),this.totalArticles)
    }
    
  }

  /**
   * pour reinitalise article tableau
   */
  public initiateArticle() {
    this.articleS.allArticles = []
    this.articleS.totalArticleCount = 0
  }

  /**
   * ce une method callback 
   * une fois que la method getarticles est appellé 
   * on calcul nbr de page a partire de la resultat
   */
  public totalArticles = (count:number) => {
    this.totalArticleCount = count
    this.getTotalPagesCount()
    this.getAfficheTable()
  }

  /**
   * ce method pour calculé nbr de page par rapport la retour
   */
  public getTotalPagesCount() {

    let total
    if(this.totalArticleCount < 10) {
      total = 1
    } else {
      total = Math.round(this.totalArticleCount / 10)
    }
    this.totalPagesCount = total
  }

  /**
   * ce method est appellé pour calculé offset concernent la page current
   */
  private calculOffset(page:number) {
    let offset = page - 1
        offset = offset * 10
    return offset
  }

  /**
   * pour faire calcul par rapport la table de page nbr
   */
  public getAfficheTable() {
    //console.log(this.totalPagesCount)
    let max_total = 6

    if(this.totalPagesCount < max_total) {
      return this.pageCountTable = this.range(1,this.totalPagesCount+1)
    } 

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
    //console.log(start,stop)
    return this.pageCountTable = this.range(start,stop)
  }

  /**
   * ce une method facilite faire range
   */
  public range = (start,stop,step =1) => {
    let res = []
    for(let i = start;i<stop;i+=step) {  
      res.push(i)
    }
    return res
  }
  
}

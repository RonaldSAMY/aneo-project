import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy{

  /**
   * si searchByAuteur est true on fait la recherche par auteur
   * si searchByAuteur est false on fait la recherche par tags
   */
  public searchByAuteur:boolean = true;

  public searchQuery:string = '';

  /**
   * si la searchquery est vide on fait pas la recherche
   */
  public showResults = false

  constructor(private articleS:ArticleService) { }

  /**
   * ce method appelle lors d'initailisation de la component
   * ce method est une method lifecycle
   */
  ngOnInit() {
    this.articleS.searchPage = true
  }

  /**
   * ngOnDestroy method appelle lors de quitter la componant
   * ce une method lifecycle
   */
  ngOnDestroy(): void {
    this.articleS.searchPage = false
  }

  /**
   * search method prend le query pour fairre la recherche
   * et fait la recherche depands de demande par rapport utilisateur 
   * soit sur auteur soit sur tags et retoutrne toujours premier 10 resultats
   * @param val 
   */
  search(val) {
    this.searchQuery = val
    if(this.searchQuery === '') {
      this.showResults = false;
      return
    }
    if(this.searchByAuteur) {
      this.articleS.getAutherArticles(this.searchQuery,0,()=>{})
      this.showResults = true
    } else {
      this.articleS.gettagArticle(this.searchQuery,0,()=>{})
      this.showResults = true
    }
  }

  /**
   * swith method pour toogle l'option de recherche 
   * soit search par auteur soit search par tags
   * 
   */
  switchOption() {
    this.searchByAuteur = !this.searchByAuteur
    this.search(this.searchQuery)
  }

  
}

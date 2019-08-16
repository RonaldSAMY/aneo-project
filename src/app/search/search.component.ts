import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy{

  public searchByAuteur:boolean = true;

  public searchQuery:string = '';

  public showResults = false

  constructor(private articleS:ArticleService) { }

  ngOnInit() {
    this.articleS.searchPage = true
  }

  ngOnDestroy(): void {
    this.articleS.searchPage = false
  }

  search(val) {
    this.searchQuery = val
    console.log(val)
    if(this.searchByAuteur) {
      this.articleS.getAutherArticles(this.searchQuery,0,()=>{})
      this.showResults = true
    } else {
      this.articleS.gettagArticle(this.searchQuery,0,()=>{})
      this.showResults = true
    }
  }

  switchOption() {
    this.searchByAuteur = !this.searchByAuteur
  }

  
}

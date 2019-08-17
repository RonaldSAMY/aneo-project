import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { Article } from '../interface/interfaces';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  public currentArticle:Article;

  /**
   * 
   * @param routeS 
   * @param articleS 
   */
  constructor(private routeS:ActivatedRoute,public articleS:ArticleService) { }

  /**
   * ce une method lifecycle
   * ce method est appelle chaque fois l'utilisateur arrive das ce page
   * 
   */
  ngOnInit() {
    let slug
    this.routeS.params.subscribe(
      param => {
        slug = param.slug
        this.articleS.getSingleArticle(slug)
      }
    )
  }


}

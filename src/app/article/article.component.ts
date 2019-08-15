import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { PaginatorService } from '../service/paginator.service';
@Component({
  selector: 'aneo-app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(public paginatorS:PaginatorService,public articleS:ArticleService) { }

  ngOnInit() {
    //this.articleS.getAllArticles()
  }

}

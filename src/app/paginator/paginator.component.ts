import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'aneo-app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {


  constructor(public articleS:ArticleService) { }

  ngOnInit() {
  }

  public getTotalPagesCount() {
    let total = this.articleS.totalArticleCount / 10
    return Array.from(Array(total).keys())
  }

}

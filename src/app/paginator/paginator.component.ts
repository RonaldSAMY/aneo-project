import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorService } from '../service/paginator.service';

@Component({
  selector: 'aneo-app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() Auter = null

  public currentPage:number = 1

  public pageCountTable:Array<number> = []

  public totalPages:number = 0


  constructor(public paginatorS:PaginatorService ,private routerS:Router, private routeS:ActivatedRoute) { 
    
  }

  ngOnInit() {
    let page
    this.routeS.params.subscribe(
      param => {
        page = param.page
        if(page == undefined) {
          page = 1
        }
        this.currentPage = page
        this.paginatorS.getCurrentPageArticles(page,this.Auter)
      }
    )
  }


  public nextPage() {
    let curPage = +this.currentPage+1
    let nextpage = "/page/"+curPage
    //this.initiateArticle()
    this.routerS.navigate([nextpage])
  }

  public prevPage() {
    let curPage = +this.currentPage-1
    if(curPage < 1) {
      curPage = 1
    }
    let prevpage = "/page/"+curPage
    //this.initiateArticle()
    this.routerS.navigate([prevpage])
  }


  public goto(page:number) {
    if(this.Auter == null) {
      this.routerS.navigate(['profile',this.Auter,'page',page])
    } else {
      this.routerS.navigate(['page',page])
    }
    
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorService } from '../service/paginator.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'aneo-app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  public currentPage:number = 1

  public pageCountTable:Array<number> = []

  public totalPages:number = 0

  /**
   * 
   * @param paginatorS 
   * @param routerS 
   * @param routeS 
   * @param profileS 
   * @param articleS 
   */
  constructor(public paginatorS:PaginatorService ,private routerS:Router, private routeS:ActivatedRoute,private profileS:ProfileService,public articleS:ArticleService) { 
    let page
    this.routeS.params.subscribe(
      param => {
        page = param.page
        if(page == undefined) {
          page = 1
        }
        console.log(page)
        this.currentPage = page
        if(this.profileS.currentUser != null) {
          this.paginatorS.getCurrentPageArticles(page,this.profileS.currentUser.username)
        } else if(!this.articleS.searchPage) {
          this.paginatorS.getCurrentPageArticles(page)
        }
      }
    )
  }

  ngOnInit() {
    
  }

  /**
   * quand ce method est appellé on redirige vers la page demandé
   * on verifié le method est appellé de page utilisateur ou l'article
   * pour prendre ls desicion les article qui doit afficher vraiment l'article d'utilisateur
   * ou tous les articles
   * @param page 
   */
  public goto(page:number) {
    if(this.profileS.currentUser != null) {
      this.routerS.navigate(['profile',this.profileS.currentUser.username,'page',page])
    } else {
      this.routerS.navigate(['page',page])
    }
  }

}

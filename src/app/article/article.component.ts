import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { PaginatorService } from '../service/paginator.service';
import { ProfileService } from '../service/profile.service';
import { UserService } from '../service/user.service';
import { Article } from '../interface/interfaces';
@Component({
  selector: 'aneo-app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  /**
   * 
   * @param paginatorS 
   * @param articleS 
   * @param profileS 
   * @param userS 
   */
  constructor(public paginatorS:PaginatorService,public articleS:ArticleService,public profileS:ProfileService,public userS:UserService) { }

  ngOnInit() {
  }

  /**
   * ce method appelle pour supprimer l'article
   * supression peut faire uniquement lors de user est connecter et 
   * l'article est apartient de utilisateur current
   * @param slug 
   */
  delete(slug:string) {
    let cnfrm = confirm('Voulez-vous vraiment supprimer cette article ??')
    if(cnfrm) {
      this.articleS.removeArticle(slug).subscribe(
        res=>{
          let newRes = []
          this.articleS.allArticles.map(
            (a:Article)=>{
              if(a.slug != slug) {
                newRes.push(a)
              }
            }
          )

          this.articleS.allArticles = newRes
        }
      )
    }
  }

}

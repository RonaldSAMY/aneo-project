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

  constructor(public paginatorS:PaginatorService,public articleS:ArticleService,public profileS:ProfileService,public userS:UserService) { }

  ngOnInit() {
    //this.articleS.getAllArticles()
  }

  delete(slug:string) {
    let cnfrm = confirm('Voulez-vous vraiment supprimer cette article ??')
    if(cnfrm) {
      this.articleS.removeArticle(slug).subscribe(
        res=>{
          this.articleS.allArticles.map(
            (a:Article)=>{
              
            }
          )
        }
      )
    }
  }

}

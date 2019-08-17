import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public tag:string = '';

  /**
   * 
   * @param userS 
   * @param routeS 
   * @param articleS 
   */
  constructor(private userS:UserService,private routeS:Router,public articleS:ArticleService) { }

  /**
   * si utilisateur n'est pas connecter on redirrige vers page d'acceuil
   */
  ngOnInit() {
    if(this.userS.connectedUser == null) {
      this.routeS.navigate(['/'])
    }
  }

  /**
   * ce method est appelle pour ajouter des tags dans le tableau des tags
   */
  addTag() {
    console.log(this.tag)
    if(this.tag != "") {
      this.articleS.newArticle.tagList.push(this.tag)
    }
    this.tag = ''
  }

  /**
   * ce method est appelle pour supprimer les tags de tableau
   */
  removeTag(index:number) {
    let newTagList = []
    this.articleS.newArticle.tagList.map(
      (t,i) => {
        if(i != index) {
          newTagList.push(t)
        }
      }
    )
    this.articleS.newArticle.tagList = newTagList
  }

}

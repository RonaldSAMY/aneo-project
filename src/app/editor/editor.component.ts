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

  constructor(private userS:UserService,private routeS:Router,public articleS:ArticleService) { }

  ngOnInit() {
    if(this.userS.connectedUser == null) {
      this.routeS.navigate(['/'])
    }
  }

  addTag() {
    console.log(this.tag)
    if(this.tag != "") {
      this.articleS.newArticle.tagList.push(this.tag)
    }
    this.tag = ''
  }

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

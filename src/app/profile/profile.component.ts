import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public profileS:ProfileService, private routeS:ActivatedRoute,private articleS:ArticleService) { }

  ngOnInit() {
    let id;
    this.routeS.params.subscribe(
      param => {
        id = param.id
        this.profileS.getUser(id)
        //this.articleS.getAutherArticles(id)
      }
    )
  }

}

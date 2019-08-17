import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {

  /**
   * 
   * @param profileS 
   * @param routeS 
   */
  constructor(public profileS:ProfileService, private routeS:ActivatedRoute) { }

  /**
   * 
   */
  ngOnInit() {
    let id;
    this.routeS.params.subscribe(
      param => {
        id = param.id
        this.profileS.getUser(id)
        this.profileS.profilePage = true
      }
    )
  }

  /**
   * 
   */
  ngOnDestroy(): void {
    console.log('destroy')
    this.profileS.currentUser = null
    this.profileS.profilePage = false
  }

}

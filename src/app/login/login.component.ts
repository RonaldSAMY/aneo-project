import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * 
   * @param userS 
   */
  constructor(public userS:UserService, private routeS:Router) { }

  ngOnInit() {
    if(this.userS.connectedUser != null){
      this.routeS.navigate(['/editor'])
    }
  }

}

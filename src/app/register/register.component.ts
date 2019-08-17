import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userS:UserService, private routeS:Router) { }

  ngOnInit() {
    this.userS.registerError = []
    if(this.userS.connectedUser != null){
      this.routeS.navigate(['/editor'])
    }
  }

}

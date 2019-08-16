import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aneo-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userS:UserService, private routeS:Router) { }

  ngOnInit() {
  }

  disconnect() {
    this.userS.disconnect()
    if(this.userS.connectedUser == null) {
      this.routeS.navigate(['/'])
    }
  }
}

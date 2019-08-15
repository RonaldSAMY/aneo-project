import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private userS:UserService,private routeS:Router) { }

  ngOnInit() {
    if(this.userS.connectedUser == null) {
      this.routeS.navigate(['/'])
    }
  }

}

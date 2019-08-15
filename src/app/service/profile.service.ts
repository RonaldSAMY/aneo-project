import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Profile } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public currentUser:Profile = null;

  constructor(private http:HttpService) { }

  getUser(username:string) {
    this.currentUser = null
    let url = '/profiles/'+username
    this.http.get(url).subscribe(
      (res: any) => {
        this.currentUser = res.profile
        console.log(this.currentUser)
      },
      e => {
        console.log(e);
      }
    );
  }
}

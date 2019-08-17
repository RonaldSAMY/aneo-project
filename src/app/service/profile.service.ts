import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Profile } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public currentUser:Profile = null;

  public profilePage:boolean = false

  constructor(private http:HttpService) { }

  /**
   * ce method est faire login
   * @param username 
   */
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

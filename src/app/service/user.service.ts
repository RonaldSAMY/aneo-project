import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { NewUser, ErrorAneo, LoginUser, User } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public connectedUser: User = null

  // ------------------ REGISTER ------------------------------------

  public registerUser: NewUser = {
    email: '',
    password: '',
    username: ''
  }
  public registerError:Array<ErrorAneo> = []

  public resiterLoder:boolean = false;

  // ------------------- FIN REGISTER ---------------------------------------


  // -------------------- LOGIN ------------------------------------------

  public loginUser:LoginUser = {
    email: '',
    password : ''
  } 

  public loginError:Array<ErrorAneo> = []

  // -------------------- FIN LOGIN --------------------------------------

  public userSigned:boolean = false;

  constructor(private http: HttpService) { this.getUserFromLocalStorage() }

  register() {
    this.registerError = []
    this.resiterLoder = true;
    let user = {
      "user":this.registerUser
    }
    this.http.post(user, "/users").subscribe(
      (res:any) => {
        this.resiterLoder = false;
      },e => {
        let err = e.error.errors
        for ( var key in err ) {
          let er:ErrorAneo = {
            field:'',
            msg : []
          }
          er.field = key
          er.msg = err[key]
          this.registerError.push(er)
          this.resiterLoder = false
        }
      }
    )
  }

  signIn() {
    this.loginError = []
    this.resiterLoder = true;
    let user = {
      "user":this.loginUser
    }

    this.http.post(user,"/users/login").subscribe(
      (res:any) => {
        this.connectedUser = res.user
        localStorage.setItem('connectedUser',JSON.stringify(this.connectedUser))
        this.resiterLoder = false
      },e => {
        let err = e.error.errors
        for ( var key in err ) {
          let er:ErrorAneo = {
            field:'',
            msg : []
          }
          er.field = key
          er.msg = err[key]
          this.loginError.push(er)
          this.resiterLoder = false
        }
      }
    )


  }

  getUserFromLocalStorage() {
    let connectedUser = localStorage.getItem('connectedUser')
    if(connectedUser != undefined) {
      this.connectedUser = JSON.parse(connectedUser)
    }
  }

  

}

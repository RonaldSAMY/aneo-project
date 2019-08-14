import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { NewUser, ErrorAneo, LoginUser } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  constructor(private http: HttpService) { }

  register() {
    this.registerError = []
    this.resiterLoder = true;
    let user = {
      "user":this.registerUser
    }
    console.log(user)
    this.http.post(user, "/users").subscribe(
      (res:any) => {
        console.log(res)
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
        console.log(res)
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

  

}

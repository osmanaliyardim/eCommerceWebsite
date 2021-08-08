import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  isloggedIn = false;

  login(user:User):boolean{
    if(user.userName=="osmanali" && user.password=="123456"){
      this.isloggedIn = true;
      localStorage.setItem("isLoggedIn",user.userName);
      return true;
    }
    
    return false;
  }

  isLoggedIn():boolean{
    return this.isloggedIn;
  }

  logOut(){
    localStorage.removeItem("isLoggedIn");
    this.isloggedIn = false;
  }
}
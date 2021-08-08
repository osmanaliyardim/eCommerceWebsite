import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { SweetAlertService } from '../services/sweet-alert.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService,
    private sweetAlertService:SweetAlertService) { }

  model:User = new User();

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.accountService.login(this.model);
    this.sweetAlertService.success("Giriş başarılı, sol menüden devam edin!");
  }

}

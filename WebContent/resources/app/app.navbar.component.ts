import { Component, Input, OnInit } from '@angular/core';
import { LoginModel } from './models/login';
import { LoginService } from "./services/app.loginServices";
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLinkService } from "./services/app.routingService";
import { ToastsManager } from 'ng2-toastr';

const lm: LoginModel = {
  loginName: "",
  password: ""
}

@Component({
  selector: 'navigation',
  templateUrl: 'resources/partials/navbar.html',
  providers: [LoginService, RouterLinkService]
})

export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService, private goLink: RouterLinkService, private route: ActivatedRoute, private router: Router, private toastr: ToastsManager) { }
  isLogin = false;
  loginModel = lm;

  ngOnInit() {
    var token = localStorage.getItem("token");
    var user = localStorage.getItem("user");
    if (token) this.isLogin = true;
    if (user) this.loginName = user;
  }
  loginName = "";
  goToActivity(i): void {
    if (i) {
      this.isLogin = i;
      this.loginName = this.loginModel.loginName;
      this.clear();
      localStorage.setItem('token', "KDD8908SKDFJQJEW1234JDJ");
      localStorage.setItem('user', this.loginName);
      this.goLink.routeTo("activity");
      this.toastr.success("Logged in successfully.","Success");
    } else {
      this.toastr.error('Invalid Credentials.',"Error");
    }
  }
  onLogin(): void {
    this.loginService.compare(this.loginModel.loginName, this.loginModel.password).then(i => this.goToActivity(i));
  }
  goBack(): void {
    this.clear();
    window.history.back();
  }
  onLogout(): void {
    this.clear();
    this.isLogin = false;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.goLink.routeTo("logout");
  }

  clear(): void {
    this.loginModel.loginName = "";
    this.loginModel.password = "";
  }
}
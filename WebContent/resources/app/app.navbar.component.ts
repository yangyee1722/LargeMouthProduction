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
            this.toastr.success("Logged in successfully.", "Success");
        } else {
            this.toastr.error('Invalid Credentials.', "Error");
        }
    }

    extractJWT(input): void {
        console.log(atob(input));
    };

    onLogin(): void {
        this.loginService.login(this.loginModel.loginName, this.loginModel.password).subscribe(function(data) {
            let token = data.token;
            let split = token.split('.')[1];
            let obj = JSON.parse(atob(split));
            console.log(obj)
        });

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
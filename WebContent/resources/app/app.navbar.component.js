"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_loginServices_1 = require("./services/app.loginServices");
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var app_routingService_1 = require("./services/app.routingService");
var ng2_toastr_1 = require('ng2-toastr');
var lm = {
    loginName: "",
    password: ""
};
var NavbarComponent = (function () {
    function NavbarComponent(loginService, goLink, route, router, toastr) {
        this.loginService = loginService;
        this.goLink = goLink;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.isLogin = false;
        this.loginModel = lm;
        this.loginName = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem("token");
        var user = localStorage.getItem("user");
        if (token)
            this.isLogin = true;
        if (user)
            this.loginName = user;
    };
    NavbarComponent.prototype.goToActivity = function (i) {
        if (i) {
            this.isLogin = i;
            this.loginName = this.loginModel.loginName;
            this.clear();
            localStorage.setItem('token', "KDD8908SKDFJQJEW1234JDJ");
            localStorage.setItem('user', this.loginName);
            this.goLink.routeTo("activity");
            this.toastr.success("Logged in successfully.", "Success");
        }
        else {
            this.toastr.error('Invalid Credentials.', "Error");
        }
    };
    NavbarComponent.prototype.extractJWT = function (input) {
        console.log(atob(input));
    };
    ;
    NavbarComponent.prototype.onLogin = function () {
        this.loginService.login(this.loginModel.loginName, this.loginModel.password).subscribe(function (data) {
            var token = data.token;
            var split = token.split('.')[1];
            var obj = JSON.parse(atob(split));
            console.log(obj);
        });
    };
    NavbarComponent.prototype.goBack = function () {
        this.clear();
        window.history.back();
    };
    NavbarComponent.prototype.onLogout = function () {
        this.clear();
        this.isLogin = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.goLink.routeTo("logout");
    };
    NavbarComponent.prototype.clear = function () {
        this.loginModel.loginName = "";
        this.loginModel.password = "";
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: 'resources/partials/navbar.html',
            providers: [app_loginServices_1.LoginService, app_routingService_1.RouterLinkService]
        }), 
        __metadata('design:paramtypes', [app_loginServices_1.LoginService, app_routingService_1.RouterLinkService, router_1.ActivatedRoute, router_2.Router, ng2_toastr_1.ToastsManager])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=app.navbar.component.js.map
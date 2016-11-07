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
var LoginModel_mockup_1 = require("../mockups/LoginModel-mockup");
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx'); //'rxjs/Observable';
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = "/login";
    }
    LoginService.prototype.compare = function (loginName, password) {
        return Promise.resolve(loginName == LoginModel_mockup_1.LoginModelMockup.loginName && password == LoginModel_mockup_1.LoginModelMockup.password);
    };
    LoginService.prototype.login = function (loginName, password) {
        this.loginUrl += "?name=" + encodeURIComponent(loginName);
        return this.http.get(this.loginUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var body = JSON.parse(res['_body']);
        return body || {};
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=app.loginServices.js.map
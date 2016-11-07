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
var app_routing_1 = require('./app.routing');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_navbar_component_1 = require('./app.navbar.component');
var app_services_1 = require('./app.services');
var forms_1 = require('@angular/forms');
var app_index_component_1 = require("./app.index.component");
var app_about_component_1 = require("./app.about.component");
var app_privacy_component_1 = require("./app.privacy.component");
var app_activity_component_1 = require("./app.activity.component");
var app_loginServices_1 = require("./services/app.loginServices");
var app_logout_component_1 = require("./app.logout.component");
var enter_1 = require("./directive/enter");
var app_routingService_1 = require("./services/app.routingService");
var ng2_toastr_1 = require('ng2-toastr');
var http_1 = require('@angular/http');
var options = {
    autoDismiss: false,
    positionClass: 'toast-top-center',
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                ng2_toastr_1.ToastModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_activity_component_1.ActivityComponent,
                app_component_1.AppComponent,
                app_about_component_1.AboutComponent,
                app_logout_component_1.LogoutComponent,
                app_navbar_component_1.NavbarComponent,
                app_index_component_1.IndexComponent,
                app_privacy_component_1.PrivacyPolicyComponent,
                enter_1.EnterDirective
            ],
            providers: [
                app_services_1.HomeService,
                app_loginServices_1.LoginService,
                app_routingService_1.RouterLinkService,
                { provide: ng2_toastr_1.ToastOptions, useValue: options }
            ],
            bootstrap: [app_index_component_1.IndexComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.modules.js.map
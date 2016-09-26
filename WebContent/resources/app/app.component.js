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
var app_services_1 = require("./app.services");
var AppComponent = (function () {
    function AppComponent(homeService) {
        this.homeService = homeService;
        this.title = "Unknown";
        this.selectedText = "";
        this.description = "";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.scrollToBottom();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.scrollToBottom();
        this.getList();
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    AppComponent.prototype.scrollToBottom = function () {
        var mediaList = document.getElementById("mediaList");
        mediaList.scrollTop = mediaList.scrollHeight;
    };
    AppComponent.prototype.getList = function () {
        var _this = this;
        this.homeService.get().then(function (i) { return _this.mediaList = i; });
    };
    AppComponent.prototype.postComment = function (text) {
        var _this = this;
        var index = this.mediaList.length - 1;
        var incrementId = this.mediaList[index].id + 1;
        var model = {};
        this.homeService.update({ id: incrementId, heading: "Unknown", description: text, img: 'resources/contents/img/theme.jpg', date: new Date().toLocaleString() }).then(function (i) { return _this.mediaList = i; });
        this.description = "";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'resources/partials/home.html',
            providers: [app_services_1.HomeService]
        }), 
        __metadata('design:paramtypes', [app_services_1.HomeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
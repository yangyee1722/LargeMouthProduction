"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_activity_component_1 = require("./app.activity.component");
var app_about_component_1 = require('./app.about.component');
var app_privacy_component_1 = require("./app.privacy.component");
var app_logout_component_1 = require("./app.logout.component");
var appRoutes = [
    {
        path: '',
        redirectTo: localStorage.getItem("token") ? '/activity' : '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: app_component_1.AppComponent
    },
    {
        path: "activity",
        component: app_activity_component_1.ActivityComponent
    },
    {
        path: "about",
        component: app_about_component_1.AboutComponent
    },
    {
        path: "logout",
        component: app_logout_component_1.LogoutComponent
    },
    {
        path: "privacy",
        component: app_privacy_component_1.PrivacyPolicyComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
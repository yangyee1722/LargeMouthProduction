import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivityComponent } from "./app.activity.component";
import { IndexComponent } from './app.index.component';
import { AboutComponent } from './app.about.component';
import { PrivacyPolicyComponent } from "./app.privacy.component";
import { LogoutComponent } from "./app.logout.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem("token") ? '/activity' : '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: AppComponent
  },
  {
    path: "activity",
    component: ActivityComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "privacy",
    component: PrivacyPolicyComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
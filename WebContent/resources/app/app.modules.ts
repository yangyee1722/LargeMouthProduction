import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app.navbar.component';
import { HomeService } from './app.services';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from "./app.index.component";
import { AboutComponent } from "./app.about.component";
import { PrivacyPolicyComponent } from "./app.privacy.component";
import { ActivityComponent } from "./app.activity.component";
import { LoginService } from "./services/app.loginServices";
import { LogoutComponent } from "./app.logout.component";
import { EnterDirective } from "./directive/enter";
import { RouterLinkService } from "./services/app.routingService";
import { ToastModule,ToastOptions } from 'ng2-toastr';
import { HttpModule, JsonpModule } from '@angular/http';

let options = <ToastOptions>{
  autoDismiss: false,
  positionClass: 'toast-top-center',
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ToastModule,
    HttpModule,
    JsonpModule
  ],

  declarations: [
    ActivityComponent,
    AppComponent,
    AboutComponent,
    LogoutComponent,
    NavbarComponent,
    IndexComponent,
    PrivacyPolicyComponent,
    EnterDirective
  ],
  providers: [
    HomeService,
    LoginService,
    RouterLinkService,
    {provide: ToastOptions, useValue: options}
  ],
  bootstrap: [IndexComponent],
})
export class AppModule {
}
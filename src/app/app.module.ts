import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuickSearchingComponent } from './quick-searching/quick-searching.component';
import { HomepageComponent} from "./homepage/homepage.component";
import { AppRoutingModule } from './/app-routing.module';
import { MyCenterComponent } from './my-center/my-center.component';
import { ActivityComponent } from './activity/activity.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickSearchingComponent,
    HomepageComponent,
    MyCenterComponent,
    ActivityComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

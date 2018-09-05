import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuickSearchingComponent } from './quick-searching/quick-searching.component';
import { HomepageComponent} from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyCenterComponent } from './my-center/my-center.component';
import { ActivityComponent } from './activity/activity.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickSearchingComponent,
    HomepageComponent,
    MyCenterComponent,
    ActivityComponent,
    LoginComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

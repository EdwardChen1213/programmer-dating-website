import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { MyCenterComponent } from "./my-center/my-center.component";
import { ActivityComponent } from "./activity/activity.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
    { path: 'homepage', component: HomePageComponent },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'mycenter', component: MyCenterComponent },
    { path: 'activity', component: ActivityComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
import {Routes} from '@angular/router';

import {loginGuard} from "./guard/login.guard";
import {MainComponent} from "./components/main/main.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {MainIntroComponent} from "./components/main/main-intro/main-intro.component";


export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path:'',component:MainIntroComponent}
    ]
  },
  {path: 'register', component: RegisterComponent, canActivate: [loginGuard]},
  {path: "login", component: LoginComponent, canActivate: [loginGuard]},
  {path: "forgot", component: ForgotPasswordComponent, canActivate: [loginGuard]},
  // {
  //   path: "admin",canActivateChild:[adminGuard],
  //   children:[{path:""}]
  // }
];

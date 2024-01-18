import {Routes} from '@angular/router';

import {adminGuard} from "./guard/admin-guard.guard";
import {loginGuard} from "./guard/login.guard";
import {MainComponent} from "./components/main/main.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";


export const routes: Routes = [
  {path: '', component: MainComponent},
  {path:'register',component:RegisterComponent,canActivate:[loginGuard]},
  {path: "login", component: LoginComponent,canActivate:[loginGuard]},
  {path: "forgot", component: ForgotPasswordComponent,canActivate:[loginGuard]},
  // {
  //   path: "admin",canActivateChild:[adminGuard],
  //   children:[{path:""}]
  // }
];

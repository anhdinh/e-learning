import {Routes} from '@angular/router';
import {MainPageComponent} from "./admin/main-page/main-page.component";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {adminGuard} from "./guard/admin-guard.guard";
import {loginGuard} from "./guard/login.guard";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {
    path: "admin",canActivateChild:[adminGuard],
    children:[{path:"",component:MainPageComponent}]
  },
  {path: "login", component: LoginComponent,canActivate:[loginGuard]}
];

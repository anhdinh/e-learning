import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication/logged-service.service";


export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authenticationService = inject(AuthenticationService);

  if (authenticationService.isLogged()) {
    router.navigate(["/"]).then(r => {});
    return false;
  } else {
    return true;
  }

};

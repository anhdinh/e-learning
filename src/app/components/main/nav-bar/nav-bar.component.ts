import { Component } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isLogged: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  logOut() {
    let confirmLogout = confirm("Are you sure?");
    if(confirmLogout){
      this.authenticationService.logout();
      this.isLogged = this.authenticationService.isLogged();
    }
  }

  ngOnInit(): void {
    this.isLogged = this.authenticationService.isLogged();
  }
}

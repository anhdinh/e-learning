import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {LocalStorageKeys} from "../constants/LocalStorageKeys";
import {AuthenticationService} from "../services/authentication/logged-service.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  logOut() {
    this.authenticationService.logout();
    this.isLogged = this.authenticationService.isLogged();

  }

  ngOnInit(): void {
    this.isLogged = this.authenticationService.isLogged();
  }
}

import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageKeys} from "../constants/LocalStorageKeys";
import {environment} from "../environments/environment";
import {LocalstorageService} from "./localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = environment.apiURL+'/authentication/login';
  private refreshTokenUrl = environment.apiURL+'/authentication/refresh';

  constructor(private http: HttpClient,private localStorage:LocalstorageService) {
  }

  private getStorage(){
    return this.localStorage.getStorage();
  }

  public isLogged(): boolean {
    return !!this.getStorage().getItem(LocalStorageKeys.JWT_TOKEN);
  }

  public logout(){
    this.getStorage().removeItem(LocalStorageKeys.JWT_TOKEN)
    this.getStorage().removeItem(LocalStorageKeys.JWT_REFRESH_TOKEN)
    this.getStorage().removeItem(LocalStorageKeys.USERNAME);
    this.getStorage().removeItem(LocalStorageKeys.ROLES);
  }
  public saveUserInfoToStorage(jwtToken:string,refreshToken:string,username:string,roles:string){
    this.getStorage().setItem(LocalStorageKeys.JWT_TOKEN,jwtToken);
    this.getStorage().setItem(LocalStorageKeys.JWT_REFRESH_TOKEN,refreshToken);
    this.getStorage().setItem(LocalStorageKeys.USERNAME,username);
    this.getStorage().setItem(LocalStorageKeys.ROLES,roles);
  }

  public login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}

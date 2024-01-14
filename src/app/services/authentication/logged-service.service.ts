import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {LocalStorageKeys} from "../../constants/LocalStorageKeys";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  get localStorage(): Storage {
    return getLocalStorage();
  }

  private loginUrl = environment.apiURL+'/authentication/login';

  constructor(private http: HttpClient) { }

  public isLogged(): boolean {
    return !!this.localStorage.getItem(LocalStorageKeys.JWT_TOKEN);
  }

  public logout(){
    this.localStorage.removeItem(LocalStorageKeys.JWT_TOKEN)
  }

  public login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}

function getLocalStorage(): Storage {
  return localStorage;
}

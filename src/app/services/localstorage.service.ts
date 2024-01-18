import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService{
 public getStorage(): Storage {
    return localStorage;
  }

}

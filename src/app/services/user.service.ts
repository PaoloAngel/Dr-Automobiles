import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUserAuthData } from "../models/userAuth";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userAuthDataSubject = new BehaviorSubject<IUserAuthData | null> (null);
  userAuthData$ = this.userAuthDataSubject.asObservable();

  updateUserAuthData(data: IUserAuthData){
    this.userAuthDataSubject.next(data);
  }
}

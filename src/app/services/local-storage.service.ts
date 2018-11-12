import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public getMerchantID(): string {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser;
  }
}

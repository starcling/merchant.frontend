import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceStep1 {
  public model: any;
  setValues(values) {
    this.model = values;
  }
  constructor() {}
}

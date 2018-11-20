import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceStep2 {
  public model: any;
  setValues(values) {
    this.model = values;
    console.log('data', values);
  }

  constructor() {}
}

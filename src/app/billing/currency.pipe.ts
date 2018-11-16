import { Pipe, PipeTransform, Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
const _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
@Pipe({
  name: 'CustomeCurrency'
})
export class currencyPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}
  transform(value: any, currency: string, symbol: boolean = false, digits: string): string {
    if (value == 'USD') {
      // return this.currencyPipe.transform(value, currency, symbol);
      // return value.transform(value, currency, symbol, digits);
      return value.replace('USD', '$');
    } else if (value == 'JPY') {
      return value.replace('JPY', '¥');
    } else if (value == 'EUR') {
      return value.replace('EUR', '€');
    } else if (value == 'GBP') {
      return value.replace('GBP', '£');
    }
  }
}

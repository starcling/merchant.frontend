import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { currencyPipe } from '@app/currency.pipe';

@NgModule({
  declarations: [currencyPipe],
  imports: [CommonModule],
  exports: [currencyPipe]
})
export class MainPipe {}

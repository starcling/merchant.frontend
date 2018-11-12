import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, FooterComponent, HeaderComponent, SidebarComponent],
  exports: [LoaderComponent, FooterComponent, HeaderComponent, SidebarComponent]
})
export class SharedModule {}

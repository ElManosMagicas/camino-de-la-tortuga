import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [HomePage, HomeFooterComponent],
  imports: [CommonModule, HomeRoutingModule, LayoutModule],
})
export class HomeModule {}

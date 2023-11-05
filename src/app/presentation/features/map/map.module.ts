import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [MapPage],
  imports: [CommonModule, MapRoutingModule, LayoutModule],
})
export class MapModule {}

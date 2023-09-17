import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';


@NgModule({
  declarations: [
    MapPage
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }

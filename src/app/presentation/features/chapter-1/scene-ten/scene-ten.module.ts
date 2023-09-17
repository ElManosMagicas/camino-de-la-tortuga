import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTenRoutingModule } from './scene-ten-routing.module';
import { SceneTenPage } from './scene-ten.page';


@NgModule({
  declarations: [
    SceneTenPage
  ],
  imports: [
    CommonModule,
    SceneTenRoutingModule
  ]
})
export class SceneTenModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTwelveRoutingModule } from './scene-twelve-routing.module';
import { SceneTwelvePage } from './scene-twelve.page';


@NgModule({
  declarations: [
    SceneTwelvePage
  ],
  imports: [
    CommonModule,
    SceneTwelveRoutingModule
  ]
})
export class SceneTwelveModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneFiveRoutingModule } from './scene-five-routing.module';
import { SceneFivePage } from './scene-five.page';


@NgModule({
  declarations: [
    SceneFivePage
  ],
  imports: [
    CommonModule,
    SceneFiveRoutingModule
  ]
})
export class SceneFiveModule { }

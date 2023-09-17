import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneFourRoutingModule } from './scene-four-routing.module';
import { SceneFourPage } from './scene-four.page';


@NgModule({
  declarations: [
    SceneFourPage
  ],
  imports: [
    CommonModule,
    SceneFourRoutingModule
  ]
})
export class SceneFourModule { }

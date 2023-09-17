import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTwoRoutingModule } from './scene-two-routing.module';
import { SceneTwoPage } from './scene-two.page';


@NgModule({
  declarations: [
    SceneTwoPage
  ],
  imports: [
    CommonModule,
    SceneTwoRoutingModule
  ]
})
export class SceneTwoModule { }

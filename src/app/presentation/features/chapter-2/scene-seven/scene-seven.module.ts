import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSevenRoutingModule } from './scene-seven-routing.module';
import { SceneSevenPage } from './scene-seven.page';


@NgModule({
  declarations: [
    SceneSevenPage
  ],
  imports: [
    CommonModule,
    SceneSevenRoutingModule
  ]
})
export class SceneSevenModule { }

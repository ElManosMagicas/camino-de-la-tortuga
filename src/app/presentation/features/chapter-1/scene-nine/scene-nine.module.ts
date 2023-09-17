import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneNineRoutingModule } from './scene-nine-routing.module';
import { SceneNinePage } from './scene-nine.page';


@NgModule({
  declarations: [
    SceneNinePage
  ],
  imports: [
    CommonModule,
    SceneNineRoutingModule
  ]
})
export class SceneNineModule { }

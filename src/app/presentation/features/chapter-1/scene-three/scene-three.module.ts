import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneThreeRoutingModule } from './scene-three-routing.module';
import { SceneThreePage } from './scene-three.page';


@NgModule({
  declarations: [
    SceneThreePage
  ],
  imports: [
    CommonModule,
    SceneThreeRoutingModule
  ]
})
export class SceneThreeModule { }

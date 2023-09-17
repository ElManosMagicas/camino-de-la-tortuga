import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneElevenRoutingModule } from './scene-eleven-routing.module';
import { SceneElevenPage } from './scene-eleven.page';


@NgModule({
  declarations: [
    SceneElevenPage
  ],
  imports: [
    CommonModule,
    SceneElevenRoutingModule
  ]
})
export class SceneElevenModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneEightRoutingModule } from './scene-eight-routing.module';
import { SceneEightPage } from './scene-eight.page';


@NgModule({
  declarations: [
    SceneEightPage
  ],
  imports: [
    CommonModule,
    SceneEightRoutingModule
  ]
})
export class SceneEightModule { }

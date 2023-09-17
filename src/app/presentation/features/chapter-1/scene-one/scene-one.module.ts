import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneOneRoutingModule } from './scene-one-routing.module';
import { SceneOnePage } from './scene-one.page';


@NgModule({
  declarations: [
    SceneOnePage
  ],
  imports: [
    CommonModule,
    SceneOneRoutingModule
  ]
})
export class SceneOneModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSixRoutingModule } from './scene-six-routing.module';
import { SceneSixPage } from './scene-six.page';


@NgModule({
  declarations: [
    SceneSixPage
  ],
  imports: [
    CommonModule,
    SceneSixRoutingModule
  ]
})
export class SceneSixModule { }

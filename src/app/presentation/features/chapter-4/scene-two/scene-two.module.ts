import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTwoRoutingModule } from './scene-two-routing.module';
import { SceneTwoPage } from './scene-two.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneTwoPage],
  imports: [CommonModule, SceneTwoRoutingModule, LayoutModule],
})
export class SceneTwoModule {}

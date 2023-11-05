import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneFourRoutingModule } from './scene-four-routing.module';
import { SceneFourPage } from './scene-four.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneFourPage],
  imports: [CommonModule, SceneFourRoutingModule, LayoutModule],
})
export class SceneFourModule {}

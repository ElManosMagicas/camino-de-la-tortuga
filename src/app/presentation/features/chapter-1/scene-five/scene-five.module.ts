import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSixRoutingModule } from './scene-five-routing.module';
import { SceneFivePage } from './scene-five.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneFivePage],
  imports: [CommonModule, SceneSixRoutingModule, LayoutModule],
})
export class SceneFiveModule {}

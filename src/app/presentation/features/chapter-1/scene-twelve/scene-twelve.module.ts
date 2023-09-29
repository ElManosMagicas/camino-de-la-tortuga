import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTwelveRoutingModule } from './scene-twelve-routing.module';
import { SceneTwelvePage } from './scene-twelve.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneTwelvePage],
  imports: [CommonModule, SceneTwelveRoutingModule, LayoutModule],
})
export class SceneTwelveModule {}

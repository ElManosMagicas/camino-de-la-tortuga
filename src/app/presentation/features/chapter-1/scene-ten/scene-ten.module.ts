import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTenRoutingModule } from './scene-ten-routing.module';
import { SceneTenPage } from './scene-ten.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneTenPage],
  imports: [CommonModule, SceneTenRoutingModule, LayoutModule],
})
export class SceneTenModule {}

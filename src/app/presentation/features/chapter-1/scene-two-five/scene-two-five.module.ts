import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneTwoFiveRoutingModule } from './scene-two-five-routing.module';
import { SceneTwoFivePage } from './scene-two-five.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneTwoFivePage],
  imports: [CommonModule, SceneTwoFiveRoutingModule, LayoutModule],
})
export class SceneTwoFiveModule {}

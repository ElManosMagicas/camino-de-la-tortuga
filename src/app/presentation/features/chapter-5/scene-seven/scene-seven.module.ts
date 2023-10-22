import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSevenRoutingModule } from './scene-seven-routing.module';
import { SceneSevenComponent } from './scene-seven.component';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneSevenComponent],
  imports: [CommonModule, SceneSevenRoutingModule, LayoutModule],
})
export class SceneSevenModule {}

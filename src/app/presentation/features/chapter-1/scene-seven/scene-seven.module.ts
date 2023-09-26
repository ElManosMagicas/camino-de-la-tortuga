import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSevenRoutingModule } from './scene-seven-routing.module';
import { SceneSevenPage } from './scene-seven.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneSevenPage],
  imports: [CommonModule, SceneSevenRoutingModule, LayoutModule],
})
export class SceneSevenModule {}

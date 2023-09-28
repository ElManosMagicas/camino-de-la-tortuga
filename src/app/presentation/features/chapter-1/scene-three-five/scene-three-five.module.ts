import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneThreeFiveRoutingModule } from './scene-three-five-routing.module';
import { SceneThreeFivePage } from './scene-three-five.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneThreeFivePage],
  imports: [CommonModule, SceneThreeFiveRoutingModule, LayoutModule],
})
export class SceneThreeFiveModule {}

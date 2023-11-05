import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneThreeRoutingModule } from './scene-three-routing.module';
import { SceneThreePage } from './scene-three.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneThreePage],
  imports: [CommonModule, SceneThreeRoutingModule, LayoutModule],
})
export class SceneThreeModule {}

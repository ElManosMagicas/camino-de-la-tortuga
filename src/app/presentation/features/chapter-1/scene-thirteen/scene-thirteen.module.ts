import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneThirteenRoutingModule } from './scene-thirteen-routing.module';
import { SceneThirteenPage } from './scene-thirteen.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneThirteenPage],
  imports: [CommonModule, SceneThirteenRoutingModule, LayoutModule],
})
export class SceneThirteenModule {}

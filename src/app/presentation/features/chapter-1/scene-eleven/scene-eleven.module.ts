import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneElevenRoutingModule } from './scene-eleven-routing.module';
import { SceneElevenPage } from './scene-eleven.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneElevenPage],
  imports: [CommonModule, SceneElevenRoutingModule, LayoutModule],
})
export class SceneElevenModule {}

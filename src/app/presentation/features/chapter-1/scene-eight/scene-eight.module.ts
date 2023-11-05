import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneEightRoutingModule } from './scene-eight-routing.module';
import { SceneEightPage } from './scene-eight.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneEightPage],
  imports: [CommonModule, SceneEightRoutingModule, LayoutModule],
})
export class SceneEightModule {}

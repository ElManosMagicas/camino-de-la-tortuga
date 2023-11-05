import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneOneRoutingModule } from './scene-one-routing.module';
import { SceneOnePage } from './scene-one.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneOnePage],
  imports: [CommonModule, SceneOneRoutingModule, LayoutModule],
})
export class SceneOneModule {}

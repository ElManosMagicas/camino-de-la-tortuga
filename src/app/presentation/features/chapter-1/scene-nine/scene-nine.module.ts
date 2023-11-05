import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneNineRoutingModule } from './scene-nine-routing.module';
import { SceneNinePage } from './scene-nine.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneNinePage],
  imports: [CommonModule, SceneNineRoutingModule, LayoutModule],
})
export class SceneNineModule {}

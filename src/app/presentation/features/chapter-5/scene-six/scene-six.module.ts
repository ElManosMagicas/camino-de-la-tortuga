import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSixRoutingModule } from './scene-six-routing.module';
import { SceneSixPage } from './scene-six.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [SceneSixPage],
  imports: [CommonModule, SceneSixRoutingModule, LayoutModule],
})
export class SceneSixModule {}

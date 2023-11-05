import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneEightRoutingModule } from './scene-eight-routing.module';
import { SceneEightPage } from './scene-eight.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';
import { SuccessActivityChapterThreeComponent } from '../components/success-activity-chapter-three/success-activity-chapter-three.component';

const COMPONENTS = [SuccessActivityChapterThreeComponent];

@NgModule({
  declarations: [SceneEightPage, ...COMPONENTS],
  imports: [CommonModule, SceneEightRoutingModule, LayoutModule],
})
export class SceneEightModule {}

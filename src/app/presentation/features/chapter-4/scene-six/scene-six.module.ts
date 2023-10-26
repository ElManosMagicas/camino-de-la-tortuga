import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSixRoutingModule } from './scene-six-routing.module';
import { SceneSixPage } from './scene-six.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';
import { SuccessActivityChapterFourComponent } from '../components/success-activity-chapter-four/success-activity-chapter-four.component';

const COMPONENTS = [SuccessActivityChapterFourComponent];

@NgModule({
  declarations: [SceneSixPage, ...COMPONENTS],
  imports: [CommonModule, SceneSixRoutingModule, LayoutModule],
})
export class SceneSixModule {}

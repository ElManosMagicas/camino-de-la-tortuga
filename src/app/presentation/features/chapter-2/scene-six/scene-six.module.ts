import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneSixRoutingModule } from './scene-six-routing.module';
import { SceneSixPage } from './scene-six.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';
import { SuccessActivityChapterTwoComponent } from '../components/success-activity-chapter-two/success-activity-chapter-two.component';

const COMPONENTS = [SuccessActivityChapterTwoComponent];

@NgModule({
  declarations: [SceneSixPage, ...COMPONENTS],
  imports: [CommonModule, SceneSixRoutingModule, LayoutModule],
})
export class SceneSixModule {}

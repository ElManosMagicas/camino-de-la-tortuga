import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneOneRoutingModule } from './scene-one-routing.module';
import { SceneOnePage } from './scene-one.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SceneOnePage],
  imports: [
    CommonModule,
    SceneOneRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SceneOneModule {}

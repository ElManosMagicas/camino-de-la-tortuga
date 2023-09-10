import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionsRoutingModule } from './instructions-routing.module';
import { InstructionsPage } from './instructions.page';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    InstructionsPage,
    SliderComponent
  ],
  imports: [
    CommonModule,
    InstructionsRoutingModule
  ]
})
export class InstructionsModule { }

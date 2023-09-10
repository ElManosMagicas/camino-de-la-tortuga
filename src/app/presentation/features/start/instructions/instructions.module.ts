import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionsRoutingModule } from './instructions-routing.module';
import { InstructionsPage } from './instructions.page';


@NgModule({
  declarations: [
    InstructionsPage
  ],
  imports: [
    CommonModule,
    InstructionsRoutingModule
  ]
})
export class InstructionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter5RoutingModule } from './chapter-5-routing.module';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, Chapter5RoutingModule, LayoutModule],
})
export class Chapter5Module {}

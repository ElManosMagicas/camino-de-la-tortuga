import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { LayoutBarComponent } from './components/layout-bar/layout-bar.component';
import { SplashComponent } from './components/splash/splash.component';

const PIPES = [];

const COMPONENTS = [BaseComponent, LayoutBarComponent, SplashComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class LayoutModule {}

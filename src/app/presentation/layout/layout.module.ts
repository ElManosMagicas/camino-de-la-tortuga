import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { LayoutBarComponent } from './components/layout-bar/layout-bar.component';
import { SplashComponent } from './components/splash/splash.component';
import { InnerNavComponent } from './components/inner-nav/inner-nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { SoundButtonComponent } from './components/sound-button/sound-button.component';

const PIPES = [];

const COMPONENTS = [
  BaseComponent,
  LayoutBarComponent,
  InnerNavComponent,
  SplashComponent,
  ModalComponent,
  SoundButtonComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class LayoutModule {}

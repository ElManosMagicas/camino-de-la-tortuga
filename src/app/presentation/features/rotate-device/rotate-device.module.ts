import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotateDeviceRoutingModule } from './rotate-device-routing.module';
import { RotateDevicePage } from './rotate-device.page';
import { LayoutModule } from '@app/presentation/layout/layout.module';

@NgModule({
  declarations: [RotateDevicePage],
  imports: [CommonModule, RotateDeviceRoutingModule, LayoutModule],
})
export class RotateDeviceModule {}

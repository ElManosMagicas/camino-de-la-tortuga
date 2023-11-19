import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotateDevicePage } from './rotate-device.page';

const routes: Routes = [
  {
    path: '',
    component: RotateDevicePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotateDeviceRoutingModule {}

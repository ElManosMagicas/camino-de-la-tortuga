import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneTwoFivePage } from './scene-two-five.page';

const routes: Routes = [
  {
    path: '',
    component: SceneTwoFivePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneTwoFiveRoutingModule {}

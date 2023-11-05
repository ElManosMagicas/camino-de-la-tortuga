import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneTwoPage } from './scene-two.page';

const routes: Routes = [
  {
    path: '',
    component: SceneTwoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneTwoRoutingModule {}

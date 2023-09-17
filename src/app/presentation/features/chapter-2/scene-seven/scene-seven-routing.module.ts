import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneSevenPage } from './scene-seven.page';

const routes: Routes = [
  {
    path: '',
    component: SceneSevenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneSevenRoutingModule {}

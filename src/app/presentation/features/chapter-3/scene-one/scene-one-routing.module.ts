import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneOnePage } from './scene-one.page';

const routes: Routes = [
  {
    path: '',
    component: SceneOnePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneOneRoutingModule {}

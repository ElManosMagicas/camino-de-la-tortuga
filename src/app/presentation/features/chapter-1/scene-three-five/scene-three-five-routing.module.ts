import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneThreeFivePage } from './scene-three-five.page';

const routes: Routes = [
  {
    path: '',
    component: SceneThreeFivePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneThreeFiveRoutingModule {}

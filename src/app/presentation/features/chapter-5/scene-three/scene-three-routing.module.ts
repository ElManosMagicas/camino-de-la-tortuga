import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneThreePage } from './scene-three.page';

const routes: Routes = [
  {
    path: '',
    component: SceneThreePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneThreeRoutingModule {}

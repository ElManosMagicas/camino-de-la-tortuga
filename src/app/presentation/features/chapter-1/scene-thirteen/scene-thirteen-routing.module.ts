import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneThirteenPage } from './scene-thirteen.page';

const routes: Routes = [
  {
    path: '',
    component: SceneThirteenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneThirteenRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneEightPage } from './scene-eight.page';

const routes: Routes = [
  {
    path: '',
    component: SceneEightPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneEightRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneElevenPage } from './scene-eleven.page';

const routes: Routes = [
  {
    path: '',
    component: SceneElevenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneElevenRoutingModule {}

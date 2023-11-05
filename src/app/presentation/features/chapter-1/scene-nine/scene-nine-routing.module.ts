import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneNinePage } from './scene-nine.page';

const routes: Routes = [
  {
    path: '',
    component: SceneNinePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneNineRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneTwelvePage } from './scene-twelve.page';

const routes: Routes = [
  {
    path: '',
    component: SceneTwelvePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneTwelveRoutingModule {}

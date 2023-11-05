import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneFourPage } from './scene-four.page';

const routes: Routes = [
  {
    path: '',
    component: SceneFourPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneFourRoutingModule {}

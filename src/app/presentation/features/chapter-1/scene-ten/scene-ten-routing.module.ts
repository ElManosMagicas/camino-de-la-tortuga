import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneTenPage } from './scene-ten.page';

const routes: Routes = [
  {
    path: '',
    component: SceneTenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneTenRoutingModule {}

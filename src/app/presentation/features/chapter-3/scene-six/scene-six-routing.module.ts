import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneSixPage } from './scene-six.page';

const routes: Routes = [
  {
    path: '',
    component: SceneSixPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneSixRoutingModule {}

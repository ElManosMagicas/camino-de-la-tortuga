import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneSevenComponent } from './scene-seven.component';

const routes: Routes = [
  {
    path: '',
    component: SceneSevenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneSevenRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '@app/presentation/layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'escena-1',
    pathMatch: 'full',
  },
  {
    path: 'escena-1',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-one/scene-one.module').then((m) => m.SceneOneModule),
  },
  {
    path: 'escena-2',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-two/scene-two.module').then((m) => m.SceneTwoModule),
  },
  {
    path: 'escena-3',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-three/scene-three.module').then(
        (m) => m.SceneThreeModule
      ),
  },
  {
    path: 'escena-4',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-four/scene-four.module').then((m) => m.SceneFourModule),
  },
  {
    path: 'escena-5',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-five/scene-five.module').then((m) => m.SceneFiveModule),
  },
  {
    path: 'escena-6',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-six/scene-six.module').then((m) => m.SceneSixModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter5RoutingModule {}

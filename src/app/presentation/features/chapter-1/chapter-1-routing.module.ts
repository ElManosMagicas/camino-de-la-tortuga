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
    path: 'escena-2.5',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-two-five/scene-two-five.module').then(
        (m) => m.SceneTwoFiveModule
      ),
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
  {
    path: 'escena-7',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-seven/scene-seven.module').then(
        (m) => m.SceneSevenModule
      ),
  },
  {
    path: 'escena-8',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-eight/scene-eight.module').then(
        (m) => m.SceneEightModule
      ),
  },
  {
    path: 'escena-9',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-nine/scene-nine.module').then((m) => m.SceneNineModule),
  },
  {
    path: 'escena-10',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-ten/scene-ten.module').then((m) => m.SceneTenModule),
  },
  {
    path: 'escena-11',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-eleven/scene-eleven.module').then(
        (m) => m.SceneElevenModule
      ),
  },
  {
    path: 'escena-12',
    component: BaseComponent,
    loadChildren: () =>
      import('./scene-twelve/scene-twelve.module').then(
        (m) => m.SceneTwelveModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter1RoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./presentation/features/start/start.module').then(
            (m) => m.StartModule
          ),
      },
      {
        path: 'capitulo-1',
        loadChildren: () =>
          import('./presentation/features/chapter-1/chapter-1.module').then(
            (m) => m.Chapter1Module
          ),
      },
      {
        path: 'capitulo-2',
        loadChildren: () =>
          import('./presentation/features/chapter-2/chapter-2.module').then(
            (m) => m.Chapter2Module
          ),
      },
      {
        path: 'capitulo-3',
        loadChildren: () =>
          import('./presentation/features/chapter-3/chapter-3.module').then(
            (m) => m.Chapter3Module
          ),
      },
      {
        path: 'capitulo-4',
        loadChildren: () =>
          import('./presentation/features/chapter-4/chapter-4.module').then(
            (m) => m.Chapter4Module
          ),
      },
      {
        path: 'capitulo-5',
        loadChildren: () =>
          import('./presentation/features/chapter-5/chapter-5.module').then(
            (m) => m.Chapter5Module
          ),
      },
      {
        path: 'mapa',
        loadChildren: () =>
          import('./presentation/features/map/map.module').then(
            (m) => m.MapModule
          ),
      },
      {
        path: 'rota-el-dispositivo',
        loadChildren: () =>
          import(
            './presentation/features/rotate-device/rotate-device.module'
          ).then((m) => m.RotateDeviceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

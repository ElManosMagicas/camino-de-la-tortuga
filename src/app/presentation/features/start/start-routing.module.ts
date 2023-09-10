import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../../layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'instrucciones',
    component: BaseComponent,
    loadChildren: () =>
      import('./instructions/instructions.module').then(
        (m) => m.InstructionsModule
      ),
  },
  {
    path: 'configuracion',
    component: BaseComponent,
    loadChildren: () =>
      import('./configuration/configuration.module').then(
        (m) => m.ConfigurationModule
      ),
  },
  {
    path: 'creditos',
    component: BaseComponent,
    loadChildren: () =>
      import('./credits/credits.module').then((m) => m.CreditsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLayoutPage } from './tabs-layout.page';

const routes: Routes = [
  {
    path: '',
    component: TabsLayoutPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLayoutPageRoutingModule {}

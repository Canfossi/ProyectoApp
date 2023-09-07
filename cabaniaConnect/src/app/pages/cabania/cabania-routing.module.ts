import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabaniaPage } from './cabania.page';

const routes: Routes = [
  {
    path: '',
    component: CabaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabaniaPageRoutingModule {}

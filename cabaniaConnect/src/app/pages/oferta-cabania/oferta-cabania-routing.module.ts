import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaCabaniaPage } from './oferta-cabania.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaCabaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaCabaniaPageRoutingModule {}

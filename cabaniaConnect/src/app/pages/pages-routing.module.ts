import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
 
  {
    path: 'cabania',
    loadChildren: () => import('./cabania/cabania.module').then( m => m.CabaniaPageModule)
  },
  {
    path: 'oferta-cabania',
    loadChildren: () => import('./oferta-cabania/oferta-cabania.module').then( m => m.OfertaCabaniaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}

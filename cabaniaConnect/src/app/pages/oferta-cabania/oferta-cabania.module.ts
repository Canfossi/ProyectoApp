import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaCabaniaPageRoutingModule } from './oferta-cabania-routing.module';

import { OfertaCabaniaPage } from './oferta-cabania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaCabaniaPageRoutingModule
  ],
  declarations: [OfertaCabaniaPage]
})
export class OfertaCabaniaPageModule {}

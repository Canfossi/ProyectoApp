import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabaniaPageRoutingModule } from './cabania-routing.module';

import { CabaniaPage } from './cabania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabaniaPageRoutingModule
  ],
  declarations: [CabaniaPage]
})
export class CabaniaPageModule {}

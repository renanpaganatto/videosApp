import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FalcaosoldadoPageRoutingModule } from './falcaosoldado-routing.module';

import { FalcaosoldadoPage } from './falcaosoldado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FalcaosoldadoPageRoutingModule
  ],
  declarations: [FalcaosoldadoPage]
})
export class FalcaosoldadoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesejamAMortePageRoutingModule } from './desejam-a-morte-routing.module';

import { DesejamAMortePage } from './desejam-a-morte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesejamAMortePageRoutingModule
  ],
  declarations: [DesejamAMortePage]
})
export class DesejamAMortePageModule {}

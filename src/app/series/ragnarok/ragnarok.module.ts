import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RagnarokPageRoutingModule } from './ragnarok-routing.module';

import { RagnarokPage } from './ragnarok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RagnarokPageRoutingModule
  ],
  declarations: [RagnarokPage]
})
export class RagnarokPageModule {}

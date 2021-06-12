import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FalcaosoldadoPage } from './falcaosoldado.page';

const routes: Routes = [
  {
    path: '',
    component: FalcaosoldadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FalcaosoldadoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesejamAMortePage } from './desejam-a-morte.page';

const routes: Routes = [
  {
    path: '',
    component: DesejamAMortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesejamAMortePageRoutingModule {}

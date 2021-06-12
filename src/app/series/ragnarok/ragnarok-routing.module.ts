import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RagnarokPage } from './ragnarok.page';

const routes: Routes = [
  {
    path: '',
    component: RagnarokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RagnarokPageRoutingModule {}

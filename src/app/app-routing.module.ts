import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'dados-filme',
    loadChildren: () =>
      import('./dados-filme/dados-filme.module').then(
        (m) => m.DadosFilmePageModule
      ),
  },
  {
    path: 'loki',
    loadChildren: () => import('./series/loki/loki.module').then( m => m.LokiPageModule)
  },
  {
    path: 'lucifer',
    loadChildren: () => import('./series/lucifer/lucifer.module').then( m => m.LuciferPageModule)
  },
  {
    path: 'theflash',
    loadChildren: () => import('./series/theflash/theflash.module').then( m => m.TheflashPageModule)
  },
  {
    path: 'ragnarok',
    loadChildren: () => import('./series/ragnarok/ragnarok.module').then( m => m.RagnarokPageModule)
  },
  {
    path: 'falcaosoldado',
    loadChildren: () => import('./series/falcaosoldado/falcaosoldado.module').then( m => m.FalcaosoldadoPageModule)
  },
  {
    path: 'dados-series',
    loadChildren: () => import('./dados-series/dados-series.module').then( m => m.DadosSeriesPageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

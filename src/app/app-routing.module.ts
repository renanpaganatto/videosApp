import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'godzilla-kong',
    loadChildren: () => import('./filmes/godzilla-kong/godzilla-kong.module').then( m => m.GodzillaKongPageModule)
  },
  {
    path: 'rogai-por-nos',
    loadChildren: () => import('./filmes/rogai-por-nos/rogai-por-nos.module').then( m => m.RogaiPorNosPageModule)
  },
  {
    path: 'desejam-a-morte',
    loadChildren: () => import('./filmes/desejam-a-morte/desejam-a-morte.module').then( m => m.DesejamAMortePageModule)
  },
  {
    path: 'sem-remorso',
    loadChildren: () => import('./filmes/sem-remorso/sem-remorso.module').then( m => m.SemRemorsoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

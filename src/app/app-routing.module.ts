import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accueil-awa',
    loadChildren: () => import('./accueil-awa/accueil-awa.module').then( m => m.AccueilAwaPageModule)
  },
  {
    path: 'employe-form',
    loadChildren: () => import('./employe-form/employe-form.module').then( m => m.EmployeFormPageModule)
  },
  {
    path: 'defauld-categorie',
    loadChildren: () => import('./defauld-categorie/defauld-categorie.module').then( m => m.DefauldCategoriePageModule)
  },
  {
    path: 'ajout-categorie',
    loadChildren: () => import('./ajout-categorie/ajout-categorie.module').then( m => m.AjoutCategoriePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'demarrage',
    loadChildren: () => import('./demarrage/demarrage.module').then( m => m.DemarragePageModule)
  },
  {
    path: 'choix',
    loadChildren: () => import('./choix/choix.module').then( m => m.ChoixPageModule)
  },
  {
    path: 'login-employer',
    loadChildren: () => import('./login-employer/login-employer.module').then( m => m.LoginEmployerPageModule)
  },
  {
    path: 'oublier',
    loadChildren: () => import('./oublier/oublier.module').then( m => m.OublierPageModule)
  },
  {
    path: 'accueil-employer',
    loadChildren: () => import('./accueil-employer/accueil-employer.module').then( m => m.AccueilEmployerPageModule)
  },
  {
    path: 'tache',
    loadChildren: () => import('./tache/tache.module').then( m => m.TachePageModule)
  },
  {
    path: 'perte',
    loadChildren: () => import('./perte/perte.module').then( m => m.PertePageModule)
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


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
  {
    path: 'vente',
    loadChildren: () => import('./vente/vente.module').then( m => m.VentePageModule)
  },
  {
    path: 'aliment',
    loadChildren: () => import('./aliment/aliment.module').then( m => m.AlimentPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'login-client',
    loadChildren: () => import('./login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
  {
    path: 'accueil-client',
    loadChildren: () => import('./accueil-client/accueil-client.module').then( m => m.AccueilClientPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


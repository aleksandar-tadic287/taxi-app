import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'route-form'
  },
  {
    path: 'ride-form',
    loadComponent: () => import('./ride/ride-form/ride-form.component')
      .then(m => m.RideFormComponent)
  },
  {
    path: 'ride-list',
    loadComponent: () => import('./ride/ride-list/ride-list.component')
      .then(m => m.RideListComponent)
  },
  {
    path: 'ride-list/:id',
    loadComponent: () => import('./ride/ride-details/ride-details.component')
      .then(m => m.RideDetailsComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./ride/ride-form/ride-form.component')
      .then(m => m.RideFormComponent)
  }
];

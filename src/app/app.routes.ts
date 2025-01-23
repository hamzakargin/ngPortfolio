import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: 'training', component: TrainingComponent },

  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
];

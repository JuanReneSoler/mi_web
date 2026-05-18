import { Routes } from '@angular/router';
import { Terminal } from './features/terminal/pages/terminal/terminal';
import { Home } from './features/grafic/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Terminal
  },
  {
    path: 'grafic',
    component: Home
  }
];

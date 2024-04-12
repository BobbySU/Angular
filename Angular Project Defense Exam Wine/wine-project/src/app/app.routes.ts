import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainComponent
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'auth/register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'auth/profile',
        loadComponent: () => import('./auth/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'auth/logout',
        loadComponent: () => import('./auth/logout/logout.component').then(m => m.LogoutComponent)
    },
    {
        path: 'sections/about',
        loadComponent: () => import('./sections/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'sections/regions',
        loadComponent: () => import('./sections/regions/regions.component').then(m => m.RegionsComponent)
    },
    {
        path: 'sections/pairing',
        loadComponent: () => import('./sections/pairing/pairing.component').then(m => m.PairingComponent)
    },
    {
        path: 'sections/tasting',
        loadComponent: () => import('./sections/tasting/tasting.component').then(m => m.TastingComponent)
    }
];

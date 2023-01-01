import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {
        path: 'main/home',
        component: HomeComponent
    },
    {
        path: 'main/welcome',
        component: WelcomeComponent
    }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class MainRoutingModule { }

export const MainRoutingModule = RouterModule.forChild(routes);

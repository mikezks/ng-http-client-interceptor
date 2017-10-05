import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);

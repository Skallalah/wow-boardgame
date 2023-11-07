import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { ScreenRoutingModule } from './screens/screen-routing.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-menu',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {}), ScreenRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

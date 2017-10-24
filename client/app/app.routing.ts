import { Routes, RouterModule } from '@angular/router';

import { BahnhofComponent } from './bahnhof/bahnhof/bahnhof.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
    { path: '', component: BahnhofComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);

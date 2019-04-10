import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/app-friends-userprofile', pathMatch: 'full', canActivate: [AuthenticationGuard] },
    { path: 'app-friends-userprofile', component: UserProfileComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthenticationGuard
    ]
})
export class AuthenticationRouting {
}
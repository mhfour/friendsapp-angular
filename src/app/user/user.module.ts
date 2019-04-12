import { AuthenticationGuard } from '../authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        UserRoutingModule
    ],
    declarations: [
        UserProfileComponent
    ],
    providers: [
        AuthenticationGuard
    ]
})
export class UserModule {

}
import { NgModule } from '@angular/core';
import { AuthenticationRouting } from './authentication.routing';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user/user.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { CommonModule } from '@angular/common';
import { PasswordEqualValidator } from 'src/password-equal-validator.directive';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';

/**
 * Authentication Module
 */
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AuthenticationRouting
    ],
    declarations: [
        SignupComponent,
        LoginComponent,
        PasswordEqualValidator,
        ErrorAlertComponent
    ],
    providers: [
        UserService,
        AuthenticationService
    ]
})
export class AuthenticationModule {
}
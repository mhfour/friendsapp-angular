import { Component } from '@angular/core';
import { User } from '../../user/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserService } from '../../user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-friends-login',
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    errorMessage: string;
    showError: boolean;
    private user: User;

    constructor(private userService: UserService,
        private router: Router,
        private authService: AuthenticationService,
        private angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.auth.onAuthStateChanged(user => {
            if (user) {
                this.getUserInfo(user.uid);
            }
        });
    }

    onLogin(loginFormData): void {
        this.authService.login(loginFormData.value.email, loginFormData.value.password).then((user) => {
            // Login user
            const uid: string = user.uid;
            this.getUserInfo(uid);
        }).catch((error) => {
            this.errorMessage = error.message;
            this.showError = true;
        });
    }

    onReset(resetFormData): void {
        this.authService.resetPassword(resetFormData.value.email).then(() => {
            alert('Reset instruction sent to your mail');
        }).catch((error) => {
            this.errorMessage = error.message;
            this.showError = true;
        });
    }

    private navigateToUserProfile() {
        this.router.navigateByUrl('/app-friends-userprofile');
    }

    private getUserInfo(uid: string) {
        this.userService.getUser(uid).subscribe(snapshot => {
            this.user = snapshot;
            this.navigateToUserProfile();
        });
    }
}
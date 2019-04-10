import { Component } from '@angular/core';
import { User } from '../../user/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserService } from '../../user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-friends-signup',
    styleUrls: ['signup.component.css'],
    templateUrl: 'signup.component.html',
})
export class SignupComponent {
    errorMessage: string;
    showError: boolean;

    constructor(private authService: AuthenticationService,
        private router: Router,
        private userService: UserService) {
    }

    onSignup(signupFormData): void {
        this.authService.signup(signupFormData.value.email, signupFormData.value.password).then((userInfo) => {
            // Register the new user
            console.log("userInfo", userInfo);
            console.log(signupFormData.value);
            const user: User = new User(signupFormData.value.email,
                signupFormData.value.name, signupFormData.value.mobile, userInfo.user.uid, 0, '');
            this.writeNewUser(user);
            this.navigateToUserProfile();
            
        }).catch((error) => {
            this.showError = true;
            this.errorMessage = error.message;
        });
    }

    private writeNewUser(user: User): void {
        this.userService.addUser(user);
    }

    private navigateToUserProfile() {
        this.router.navigateByUrl('/app-friends-userprofile');
    }

}
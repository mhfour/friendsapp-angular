import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { User } from '.././user/user';
import { UserService } from '.././user/user.service';

@Component({
    selector: 'app-friends-userprofile',
    styleUrls: ['user-profile.component.css'],
    templateUrl: 'user-profile.component.html',
})

export class UserProfileComponent implements OnInit {

    profileImage: any = '../../../assets/person_edit.png';
    user: User;

    constructor(private authService: AuthenticationService, private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.user = this.userService.getSavedUser().getValue();
    }

    onLogout(): void {
        this.authService.signout().then(() => {
            this.navigateToLogin();
        });
    }

    navigateToLogin() {
        this.router.navigateByUrl('/app-friends-login');
    }
}
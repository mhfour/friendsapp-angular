import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-friends',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authenticationService: AuthenticationService;

  constructor(private authService: AuthenticationService) {
    this.authenticationService = authService;
  }
}
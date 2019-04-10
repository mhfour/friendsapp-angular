import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthenticationService {
    constructor(private angularFireAuth: AngularFireAuth) {
    }
    public signup(email: string, password: string): Promise<any> {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    public login(email: string, password: string): Promise<any> {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }
    public resetPassword(email: string): Promise<any> {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }

    public isAuthenticated(): boolean {
        const user = this.angularFireAuth.auth.currentUser;
        return user ? true : false;
    }

    public signout() {
        return this.angularFireAuth.auth.signOut();
    }
}
import { Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: SignInComponent },
];

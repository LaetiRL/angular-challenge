import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const ROUTES: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
] ;

export { ROUTES };

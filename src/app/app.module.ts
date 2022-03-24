import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ValidationButtonComponent } from './validation-button/validation-button.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.route';
import { UserComponent } from './user/user.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    BlockComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent,
    UserComponent,
    MyFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

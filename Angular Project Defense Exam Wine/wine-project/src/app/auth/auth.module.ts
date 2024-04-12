import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent
  ],
  exports:[ LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent
  ]
})
export class AuthModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './headar.component.html',
  styleUrl: './headar.component.scss'
})
export class HeadarComponent {
 get isLog(){
  return this.authService.isLoggedIn
 }

 get user(){
  return this.authService.user
 }

 constructor(private router: Router, private authService: AuthService){
  // this.authService.user = {
  //   username:'Bobby', 
  // } as any;
 }
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private router: Router, private authService: AuthService){
    this.authService.user = {
      username:'Bobby', 
    } as any;
  }

  get user(){
    return this.authService.user
   }
}

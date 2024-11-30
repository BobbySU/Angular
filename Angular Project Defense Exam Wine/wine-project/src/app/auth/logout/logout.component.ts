import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    imports: [],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  constructor(private router: Router, private authServie: AuthService) {
    this.authServie.user = null;
    this.router.navigate(['/']);
  }
}

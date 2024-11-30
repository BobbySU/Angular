import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    imports: [CommonModule,
        FormsModule,
        SharedModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  appEmailDomains = ['bg', 'com'];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authServie: AuthService) {

  }
  
  loginHandler(form: NgForm): void {

    if (form.invalid) { return; }
    this.authServie.user = {
      username: 'Bobby'
    } as any;

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@Component({
    selector: 'app-register',
    imports: [CommonModule,
        FormsModule,
        SharedModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
  appEmailDomains = ['bg', 'com'];
}

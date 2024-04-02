import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

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

  isLogged = false;
}

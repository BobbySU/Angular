import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.scss'
})
export class ThemeListComponent {

  constructor(private apiService: ApiService){}

  themeList: ITheme[] | null = null;
  errorFetcingData = false;

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }
}

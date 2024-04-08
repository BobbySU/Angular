import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';
import {CommonModule} from '@angular/common';
import { LoaderComponent } from "../shared/loader/loader.component";

@Component({
    selector: 'app-theme-list',
    standalone: true,
    templateUrl: './theme-list.component.html',
    styleUrl: './theme-list.component.scss',
    imports: [CommonModule, LoaderComponent]
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

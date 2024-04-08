import { Component } from '@angular/core';
import { ThemeListComponent } from '../theme-list/theme-list.component';
import { RecentPostComponent } from '../recent-post/recent-post.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ThemeListComponent,
    RecentPostComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

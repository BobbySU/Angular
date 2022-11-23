import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'second-project';

  count = 0;
  constructor() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}

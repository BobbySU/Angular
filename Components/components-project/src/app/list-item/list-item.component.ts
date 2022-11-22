import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  @Input() user!: { firstName: String; lastName: String };
  @Input() showLastName!: boolean;


  selectClickHandler() {

  }

  constructor() {}
}

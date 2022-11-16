import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  users = [
    {
      firstName: 'Bobby',
      lastName: 'Ivan',
    },
    {
      firstName: 'Anna',
      lastName: 'Ivan',
    },
    {
      firstName: 'Don',
      lastName: 'Ivan',
    },
  ];

  showLastName = false;

  handleClickEvent(event: MouseEvent) {
    this.showLastName = !this.showLastName;
  }

  constructor() {}
}

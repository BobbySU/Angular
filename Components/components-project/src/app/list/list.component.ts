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

  selectedUser: number | null = null;

  listItemClickHandler(index: number) {
    if (this.selectedUser === index) {
      this.selectedUser = null;
      return;
    }
    this.selectedUser = index;
  }

 get showSelectedIndex(): boolean {
    return (this.selectedUser === null ? -1 : this.selectedUser) >= 0;
  }

  constructor() {}
}

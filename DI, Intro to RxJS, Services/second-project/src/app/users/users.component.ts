import { Component, OnInit } from '@angular/core';
import { UserServise } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: any[];
  isLoading = true;

  constructor(private userService: UserServise) {}

  ngOnInit(): void {
    // this.userService.getUsers().then(users => {
    //   this.isLoading = false;
    //   this.users = users;
    // })
    setInterval(() => {
      this.userService.getUsers().subscribe((users) => {
        this.isLoading = false;
        this.users = users;
      });
    }, 3000);
  }
}

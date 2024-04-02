import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recent-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.scss'
})
export class RecentPostComponent {

  postList: IPost[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.postList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }
}

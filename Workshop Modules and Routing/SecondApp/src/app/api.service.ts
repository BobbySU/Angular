import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';
import { environment } from './environment';


const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
  }

  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`);
  }
}

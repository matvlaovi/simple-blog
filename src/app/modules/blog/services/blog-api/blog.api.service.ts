import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BASE_API_URL,
  BlogPost,
  BlogPostsResponse,
  CreateBlogPostBody,
} from './blog.api.service.types';

@Injectable({
  providedIn: 'root',
})
export class BlogApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllPosts(limit: number): Observable<BlogPostsResponse> {
    return this.httpClient.get<BlogPostsResponse>(
      `${BASE_API_URL}?limit=${limit}`
    );
  }

  public getPost(id: number): Observable<BlogPost> {
    return this.httpClient.get<BlogPost>(`${BASE_API_URL}/${id}`);
  }

  public createPost(body: CreateBlogPostBody): Observable<BlogPost> {
    return this.httpClient.post<BlogPost>(`${BASE_API_URL}/add`, body);
  }
}

import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../../services/blog-api/blog.api.service';
import { BlogPost } from '../../services/blog-api/blog.api.service.types';
import { DEFAULT_POST_LIMIT } from './post-list.component.types';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  public posts: BlogPost[];

  public currentLimit: number = DEFAULT_POST_LIMIT;
  public isLoadMoreButtonEnabled: boolean = true;

  constructor(private blogApiService: BlogApiService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  onLoadMoreClick(): void {
    this.currentLimit += DEFAULT_POST_LIMIT;
    this.loadPosts();
  }

  private loadPosts(): void {
    this.blogApiService.getAllPosts(this.currentLimit).subscribe((response) => {
      this.posts = response.posts;
      this.isLoadMoreButtonEnabled = response.total >= this.posts.length;
    });
  }
}

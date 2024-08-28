import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../services/blog-api/blog.api.service.types';
import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../../services/blog-api/blog.api.service';
import { first } from 'rxjs';

@Component({
    selector: 'blog-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
    public blogPost: BlogPost;

    constructor(private activatedRoute: ActivatedRoute, private blogApiService: BlogApiService) {}

    ngOnInit(): void {
        this.activatedRoute.params.pipe(first()).subscribe((params) => {
            const blogId = params['id'];

            this.blogApiService.getPost(blogId).subscribe((response) => (this.blogPost = response));
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogApiService } from '../../services/blog-api/blog.api.service';
import { CreateBlogPostBody } from '../../services/blog-api/blog.api.service.types';
import { Router } from '@angular/router';

@Component({
    selector: 'blog-create-post',
    templateUrl: './create-post.component.html',
    styleUrl: './create-post.component.scss',
})
export class CreatePostComponent implements OnInit {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private blogApiService: BlogApiService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.setupForm();
    }

    private setupForm(): void {
        this.form = this.formBuilder.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
        });
    }

    public saveForm(): void {
        this.form.markAllAsTouched();

        if (this.form.invalid) {
            return;
        }

        const payload: CreateBlogPostBody = {
            body: this.form.get('body')?.value,
            title: this.form.get('title')?.value,
            tags: [],
            userId: 1,
        };

        this.blogApiService.createPost(payload).subscribe(() => this.router.navigate(['']));
    }
}

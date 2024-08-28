import { Component, Input } from '@angular/core';
import { BlogPost } from '../../services/blog-api/blog.api.service.types';

@Component({
    selector: 'blog-post',
    templateUrl: './post.component.html',
    styleUrl: './post.component.scss',
})
export class PostComponent {
    @Input() post: BlogPost;
    @Input() showExpanded: boolean;
}

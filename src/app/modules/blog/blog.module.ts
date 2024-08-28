import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPage } from './pages/blog/blog.page';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
    BlogPage,
    PostComponent,
    PostListComponent,
    SideNavigationComponent,
    PostDetailComponent,
    CreatePostComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, BlogRoutingModule, ReactiveFormsModule],
})
export class BlogModule {}

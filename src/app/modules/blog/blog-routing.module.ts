import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPage } from './pages/blog/blog.page';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
    {
        path: '',
        component: BlogPage,
        children: [
            {
                path: '',
                component: PostListComponent,
            },
            {
                path: 'details/:id',
                component: PostDetailComponent,
            },
            {
                path: 'create',
                component: CreatePostComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}

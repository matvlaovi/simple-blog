import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'blog', pathMatch: 'full' },
    {
        path: 'blog',
        loadChildren: () => import('./modules/blog/blog.module').then((m) => m.BlogModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}

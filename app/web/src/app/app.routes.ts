import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsListComponent } from './features/posts/list/posts-list.component';
import { PostDetailsComponent } from './features/posts/details/post-details.component';
import { HomeComponent } from './features/home/home.component';
import { PostDetailsCommentsComponent } from './features/posts/details/comments/post-details-comments.component';
import { AuthComponent } from './features/auth/auth.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { CreatePostComponent } from './features/posts/create/create-post.component';

export const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'posts',
				component: PostsListComponent,
				children: [
					{
						path: ':id',
						component: PostDetailsComponent,
						children: [
							{
								path: 'comments',
								component: PostDetailsCommentsComponent,
							},
						],
					},
					{
						path: 'create',
						component: CreatePostComponent,
					},
				],
			},
		],
	},
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'register',
				component: RegisterComponent,
			},
		],
	},
];

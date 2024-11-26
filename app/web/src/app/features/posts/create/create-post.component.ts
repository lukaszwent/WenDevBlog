import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostComponent { }

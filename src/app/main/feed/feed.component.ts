import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostWidgetComponent } from './post-widget/post-widget.component';
import { CommentsWidgetComponent } from './comments-widget/comments-widget.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, PostWidgetComponent, CommentsWidgetComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {}

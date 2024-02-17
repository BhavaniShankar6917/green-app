import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './likes/likes.component';
import { PhotoTextComponent } from './photo-text/photo-text.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@Component({
  selector: 'app-post-widget',
  standalone: true,
  imports: [CommonModule, LikesComponent, PhotoTextComponent, ProfileInfoComponent],
  templateUrl: './post-widget.component.html',
  styleUrls: ['./post-widget.component.scss']
})
export class PostWidgetComponent {

}

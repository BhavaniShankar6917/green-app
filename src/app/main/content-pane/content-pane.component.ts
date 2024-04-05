import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsTabComponent } from "src/app/shared/icons-tab/icons-tab.component";
// import { IconsTabComponent } from "./icons-tab/icons-tab.component";
import { FeedComponent } from "src/app/shared/feed/feed.component";
import { SupabaseService } from "src/app/services/supabase.service";
import { PostData, PostsFromOneUser } from "src/app/types/post-data-types";
import { CommentsWidgetComponent } from "src/app/shared/feed/comments-widget/comments-widget.component";
import { PostWidgetComponent } from "src/app/shared/feed/post-widget/post-widget.component";
import { AddCommentComponent } from "src/app/shared/feed/comments-widget/add-comment/add-comment.component";
import { CaptionComponent } from "src/app/shared/feed/post-widget/caption/caption.component";
import { LikesComponent } from "src/app/shared/feed/post-widget/likes/likes.component";
import { PhotoComponent } from "src/app/shared/feed/post-widget/photo/photo.component";

import { ProfileInfoComponent } from "src/app/shared/feed/post-widget/profile-info/profile-info.component";
@Component({
  selector: "app-content-pane",
  standalone: true,
  imports: [
    CommonModule,
    IconsTabComponent,
    FeedComponent,
    CommentsWidgetComponent,
    PostWidgetComponent,
    AddCommentComponent,
    CaptionComponent,
    LikesComponent,
    PhotoComponent,
    ProfileInfoComponent,
  ],
  templateUrl: "./content-pane.component.html",
  styleUrls: ["./content-pane.component.scss"],
})
export class ContentPaneComponent {
  data!: PostData[];
  constructor(private supabase: SupabaseService) {
    this.supabase.dataForPostsOfOneUser.subscribe({
      next: (value) => {
        this.data = value.posts;
      },
    });
  }
}

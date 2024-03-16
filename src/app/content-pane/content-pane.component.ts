import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsTabComponent } from "../shared/icons-tab/icons-tab.component";
// import { IconsTabComponent } from "./icons-tab/icons-tab.component";
import { FeedComponent } from "src/app/shared/feed/feed.component";
import { SupabaseService } from "../services/supabase.service";
import { PostsFromOneUser } from "../types/post-data-types";
import { CommentsWidgetComponent } from "../shared/feed/comments-widget/comments-widget.component";
import { PostWidgetComponent } from "../shared/feed/post-widget/post-widget.component";
import { AddCommentComponent } from "../shared/feed/comments-widget/add-comment/add-comment.component";
import { CaptionComponent } from "../shared/feed/post-widget/caption/caption.component";
import { LikesComponent } from "../shared/feed/post-widget/likes/likes.component";
import { PhotoComponent } from "../shared/feed/post-widget/photo/photo.component";

import { ProfileInfoComponent } from "../shared/feed/post-widget/profile-info/profile-info.component";
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
  data!: PostsFromOneUser;
  constructor(private supabase: SupabaseService) {
    this.supabase.dataForPostsOfOneUser.subscribe({
      next: (value) => {
        this.data = value;
      },
    });
  }
}

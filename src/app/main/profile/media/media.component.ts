import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedComponent } from "src/app/shared/feed/feed.component";
import { Input } from "@angular/core";
import { PostData, PostsFromOneUser } from "src/app/types/post-data-types";
import { SupabaseService } from "src/app/services/supabase.service";

@Component({
  selector: "app-media",
  standalone: true,
  imports: [CommonModule, FeedComponent],
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"],
})
export class MediaComponent {
  postsWithMedia!: PostData[];
  // @Input() set mediaData(data: PostsFromOneUser) {
  //   data.posts.forEach((post) => {
  //     if (post.media) this.postsWithMedia.push(post);
  //   });
  // }
  data!: PostsFromOneUser;
  constructor(private supabase: SupabaseService) {
    this.supabase.dataForPostsWithMediaOfOneUser.subscribe({
      next: (value) => {
        this.postsWithMedia = value.posts;
      },
    });
  }
}

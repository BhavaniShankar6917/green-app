import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostWidgetComponent } from "./post-widget/post-widget.component";
import { CommentsWidgetComponent } from "./comments-widget/comments-widget.component";
import {
  PostData,
  PostsFromOneUser,
  CommentsData,
} from "src/app/types/post-data-types";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ImageSelectService } from "src/app/services/image-select.service";
import { SupabaseService } from "src/app/services/supabase.service";

@Component({
  selector: "app-feed",
  standalone: true,
  imports: [CommonModule, PostWidgetComponent, CommentsWidgetComponent],
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent {
  data!: PostsFromOneUser;
  hideImageSelect!: string;
  staticPostDataAsArray!: PostData[];
  constructor(
    private imageSelectService: ImageSelectService,
    private router: Router,
    private supabase: SupabaseService
  ) {}
  // @Output() commentsDataAsArray!: CommentsData[];
  postDataAsArray!: PostData[];
  @Input() set postData(value: PostData[]) {
    if (value != undefined) this.postDataAsArray = value;
  }
  // onClickOpenPost(postData: PostData) {
  //   console.log("Post id", postData.id);
  //   this.router.navigate([`/profile/${postData.id}`], { state: { postData } });
  // }
  onClickOpenPost() {}
}

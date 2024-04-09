import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostWidgetComponent } from "src/app/shared/feed/post-widget/post-widget.component";
import { CommentsWidgetComponent } from "src/app/shared/feed/comments-widget/comments-widget.component";
import { Router } from "@angular/router";
import { PostData } from "src/app/types/post-data-types";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [CommonModule, PostWidgetComponent, CommentsWidgetComponent],
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent {
  post!: PostData;
  constructor(public router: Router) {
    this.post = router.getCurrentNavigation()?.extras.state!["postData"];
  }
}

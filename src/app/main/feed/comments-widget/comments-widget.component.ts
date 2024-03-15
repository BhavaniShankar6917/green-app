import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostWidgetComponent } from "../post-widget/post-widget.component";
import { AddCommentComponent } from "./add-comment/add-comment.component";

@Component({
  selector: "app-comments-widget",
  standalone: true,
  imports: [CommonModule, AddCommentComponent, PostWidgetComponent],
  templateUrl: "./comments-widget.component.html",
  styleUrls: ["./comments-widget.component.scss"],
})
export class CommentsWidgetComponent {
  userCommentAdded: boolean = false;
}

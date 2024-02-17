import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PillComponent } from "./pill/pill.component";
import { AddCommentComponent } from "./add-comment/add-comment.component";

@Component({
  selector: "app-comments-widget",
  standalone: true,
  imports: [CommonModule, PillComponent, AddCommentComponent],
  templateUrl: "./comments-widget.component.html",
  styleUrls: ["./comments-widget.component.scss"],
})
export class CommentsWidgetComponent {
  userCommentAdded: boolean = false;
}

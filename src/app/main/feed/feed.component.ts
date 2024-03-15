import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostWidgetComponent } from "./post-widget/post-widget.component";
import { CommentsWidgetComponent } from "./comments-widget/comments-widget.component";
import {
  PostData,
  PostsFromOneUser,
  CommentsData,
} from "src/app/types/post-data-types";
import { ImageSelectService } from "src/app/services/image-select.service";

@Component({
  selector: "app-feed",
  standalone: true,
  imports: [CommonModule, PostWidgetComponent, CommentsWidgetComponent],
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent {
  constructor(private imageSelectService: ImageSelectService) {
    this.imageSelectService.getSelectedImage.subscribe((image) => {
      this.hideImageSelect = image;
      // console.log("setting selected image to: ", this.selectedImage);
    });
  }
  hideImageSelect!: string;
  @Output() postDataAsArray!: PostData[];
  @Output() commentsDataAsArray!: CommentsData[];
  @Input() set postData(value: PostsFromOneUser) {
    if (value != undefined) this.postDataAsArray = value!.posts;
  }
}

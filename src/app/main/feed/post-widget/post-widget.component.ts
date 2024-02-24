import { Component, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LikesComponent } from "./likes/likes.component";
import { PhotoTextComponent } from "./photo-text/photo-text.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { PostData, CaptionAndPhotoURL } from "src/app/types/post-data-types";

@Component({
  selector: "app-post-widget",
  standalone: true,
  imports: [
    CommonModule,
    LikesComponent,
    PhotoTextComponent,
    ProfileInfoComponent,
  ],
  templateUrl: "./post-widget.component.html",
  styleUrls: ["./post-widget.component.scss"],
})
export class PostWidgetComponent {
  @Output() outputPostData!: PostData;
  @Output() likes!: number;
  @Output() captionAndPhotoURL!: CaptionAndPhotoURL;
  @Input() set postData(value: PostData) {
    this.outputPostData = value;
    this.likes = value.likes;
    this.captionAndPhotoURL = {
      caption: value.caption,
      photo_url: value.photo_url as string,
    };
  }
}

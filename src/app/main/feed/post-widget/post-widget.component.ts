import { Component, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LikesComponent } from "./likes/likes.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { PostData, CaptionAndPhotoURL } from "src/app/types/post-data-types";
import { ServerStreamFileResponseOptions } from "http2";
import { PhotoComponent } from "./photo/photo.component";
import { CaptionComponent } from "./caption/caption.component";

@Component({
  selector: "app-post-widget",
  standalone: true,
  imports: [
    CommonModule,
    LikesComponent,
    PhotoComponent,
    CaptionComponent,
    ProfileInfoComponent,
  ],
  templateUrl: "./post-widget.component.html",
  styleUrls: ["./post-widget.component.scss"],
})
export class PostWidgetComponent {
  @Output() outputPostData!: PostData;
  @Output() likes!: number;
  @Output() caption!: string;
  @Output() photo_url!: string | null;
  @Input() set postData(value: PostData) {
    this.outputPostData = value;
    this.likes = value.likes;
    this.caption = value.caption;
    this.photo_url = value.photo_url;
  }
}

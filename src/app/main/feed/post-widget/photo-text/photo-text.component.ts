import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CaptionAndPhotoURL } from "src/app/types/post-data-types";

@Component({
  selector: "app-photo-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./photo-text.component.html",
  styleUrls: ["./photo-text.component.scss"],
})
export class PhotoTextComponent {
  selectedImage!: string;
  coordinates!: string;
  caption: string = "";
  photoURL: string = "";
  @Input() set captionAndPhotoData(value: CaptionAndPhotoURL) {
    this.caption = value.caption;
    this.photoURL = value.photo_url == null ? "" : value.photo_url;
    console.log(this.photoURL, value.photo_url);
  }

  // previewPhoto: HTMLImageElement = document.getElementById("preview");
  onClick(i: HTMLImageElement, s?: HTMLElement) {
    this.coordinates = `${i.getBoundingClientRect().left} ${
      i.getBoundingClientRect().top
    }`;
    console.log(
      `${i.getBoundingClientRect().left} ${i.getBoundingClientRect().top}`
    );
    this.selectedImage = i.src;
    // console.log(i.clientTop, i.clientHeight, i.getBoundingClientRect());
    // console.log(document.getElementById('preview'));
  }
  onLoad(i: HTMLImageElement) {
    i.style.transformOrigin = this.coordinates;
    console.log(this.coordinates);
  }
}

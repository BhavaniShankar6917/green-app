import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject } from "rxjs";
import { ImageSelectService } from "src/app/services/image-select.service";
@Component({
  selector: "app-photo",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.scss"],
})
export class PhotoComponent {
  constructor(public imageSelectService: ImageSelectService) {}
  photoURL!: string | null;
  @Input() set photoUrlData(value: string | null) {
    this.photoURL = value == null ? "" : value;
  }
  onPhotoClick(image: HTMLImageElement) {
    console.log("clicked YESSS");
    this.imageSelectService.setSelectedImage(image.src);
    console.log(this.imageSelectService.selectedImage.value);
  }

  // previewPhoto: HTMLImageElement = document.getElementById("preview");
}

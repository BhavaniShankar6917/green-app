import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageSelectService } from "src/app/services/image-select.service";
@Component({
  selector: "app-image-select",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./image-select.component.html",
  styleUrls: ["./image-select.component.scss"],
})
export class ImageSelectComponent {
  selectedImage!: string;
  selectedImageEvent = new EventEmitter<string>();
  coordinates!: string;
  constructor(public imageSelectService: ImageSelectService) {
    // console.log("Constructor of ImageSelectComponent is executed");
    this.imageSelectService.getSelectedImage.subscribe((image) => {
      this.selectedImage = image;
      console.log("setting selected image to: ", this.selectedImage);
    });
  }

  onClick(i: HTMLImageElement) {
    this.coordinates = `${i.getBoundingClientRect().left} ${
      i.getBoundingClientRect().top
    }`;
    console.log(
      `${i.getBoundingClientRect().left} ${i.getBoundingClientRect().top}`
    );
    if (this.selectedImage != undefined) {
      i.src = this.selectedImage;
    }
    // console.log(i.clientTop, i.clientHeight, i.getBoundingClientRect());
    // console.log(document.getElementById('preview'));
  }
  onLoad(i: HTMLImageElement) {
    i.style.transformOrigin = this.coordinates;
    console.log(this.coordinates);
  }
}

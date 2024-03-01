import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-photo",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.scss"],
})
export class PhotoComponent {
  selectedImage!: string;
  coordinates!: string;
  photoURL!: string | null;
  @Input() set photoUrlData(value: string | null) {
    this.photoURL = value == null ? "" : value;
  }

  // previewPhoto: HTMLImageElement = document.getElementById("preview");
  onClick(i: HTMLImageElement) {
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-text.component.html',
  styleUrls: ['./photo-text.component.scss'],
})
export class PhotoTextComponent {
  selectedImage!: string;
  coordinates!: string;
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

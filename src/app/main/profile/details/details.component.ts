import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
  isModalOpen: boolean = false;

  openCloseModal() {
    let $modal = document.getElementById("modal");
    this.isModalOpen = !this.isModalOpen;
    if (this.isModalOpen) $modal!.classList.add("is-active");
    else $modal!.classList.remove("is-active");
  }
}

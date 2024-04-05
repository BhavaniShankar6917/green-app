import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-left-bar",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./left-bar.component.html",
  styleUrls: ["./left-bar.component.scss"],
})
export class LeftBarComponent {
  @Output() homeClicked = new EventEmitter<boolean>();
  canClickHome: boolean = true;
  timerForHomeClick: any;
  isHomeClicked(clicked: boolean) {
    if (this.canClickHome) {
      this.homeClicked.emit(clicked);
      this.canClickHome = false;
      console.log("line 19", this.canClickHome);
      setTimeout(() => {
        this.canClickHome = true;
        console.log("line 22", this.canClickHome);
      }, 60000);
      console.log(this.timerForHomeClick);
    } else {
      this.homeClicked.emit(!clicked);
    }
  }
}

import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-caption",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./caption.component.html",
  styleUrls: ["./caption.component.scss"],
})
export class CaptionComponent {
  caption!: string;
  @Input() set captionData(value: string) {
    this.caption = value;
  }
}

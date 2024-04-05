import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sections-tab",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sections-tab.component.html",
  styleUrls: ["./sections-tab.component.scss"],
})
export class SectionsTabComponent {
  selectedTab: string = "posts";
  @Output() outputSelectedTab = new EventEmitter<string>();
  onClickOfTab(tab: string) {
    document.getElementById(this.selectedTab)?.classList.remove("selected");
    document.getElementById(tab)?.classList.add("selected");
    this.selectedTab = tab;
    this.outputSelectedTab.emit(tab);
  }
}

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SupabaseService } from "../services/supabase.service";
import { IconsTabComponent } from "./icons-tab/icons-tab.component";
import { FeedComponent } from "./feed/feed.component";
import { ExploreComponent } from "./explore/explore.component";
import { NestService } from "../services/nest.service";
import { LeftBarComponent } from "./left-bar/left-bar.component";
@Component({
  selector: "app-main",
  standalone: true,
  imports: [
    CommonModule,
    IconsTabComponent,
    FeedComponent,
    ExploreComponent,
    LeftBarComponent,
  ],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  constructor(private supabase: SupabaseService, private nest: NestService) {}
  createUser() {
    this.nest.createUser();
  }
}

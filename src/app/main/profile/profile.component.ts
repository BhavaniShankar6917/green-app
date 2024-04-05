import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { PostsFromOneUser } from "src/app/types/post-data-types";
import { FeedComponent } from "src/app/shared/feed/feed.component";
import { DetailsComponent } from "./details/details.component";
import { PostData } from "src/app/types/post-data-types";
import { SupabaseService } from "src/app/services/supabase.service";
import { SectionsTabComponent } from "./sections-tab/sections-tab.component";
import { MediaComponent } from "./media/media.component";
@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    CommonModule,
    DetailsComponent,
    FeedComponent,
    SectionsTabComponent,
    MediaComponent,
  ],
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  userId!: string;
  data!: PostData[];
  selectedTab: string = "posts";
  constructor(private supabase: SupabaseService) {
    this.supabase.dataForPostsOfOneUser.subscribe({
      next: (value) => {
        console.log(value);
        this.data = value.posts;
      },
    });
  }
  setSelectedTab(tab: string) {
    this.selectedTab = tab;
  }
}

import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { SupabaseService } from "../services/supabase.service";
import { IconsTabComponent } from "./icons-tab/icons-tab.component";
import { FeedComponent } from "./feed/feed.component";
import { ExploreComponent } from "./explore/explore.component";
import { NestService } from "../services/nest.service";
import { LeftBarComponent } from "./left-bar/left-bar.component";
import { PostData, PostsFromOneUser } from "src/app/types/post-data-types";
import { ImageSelectService } from "../services/image-select.service";
import { ImageSelectComponent } from "./image-select/image-select.component";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [
    CommonModule,
    IconsTabComponent,
    FeedComponent,
    ExploreComponent,
    LeftBarComponent,
    ImageSelectComponent,
  ],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  hideImageSelect!: string;
  constructor(
    private supabase: SupabaseService,
    private nest: NestService,
    private imageSelectService: ImageSelectService
  ) {
    this.imageSelectService.getSelectedImage.subscribe((image) => {
      this.hideImageSelect = image;
      // console.log("setting selected image to: ", this.selectedImage);
    });
  }
  @Output() data!: PostsFromOneUser;
  createUser() {
    console.log(this.nest.createUser());
  }
  async onHomeClicked(clicked: boolean) {
    if (clicked) {
      this.getPosts();
      // console.log(this.postData);
    } else {
      console.log("No cannot click now!!");
    }
  }

  async getPosts() {
    let subscription = (await this.supabase.getPostsOfOneUser()).subscribe({
      next: (value) => {
        console.log(value);
        this.data = value as PostsFromOneUser;
      },
    });
    return subscription;
  }
}

// {id: 2, caption: 'testing from nest backend', photo_url: null, created_at: '2024-02-08T04:04:56.526846+00:00', likes: 0}

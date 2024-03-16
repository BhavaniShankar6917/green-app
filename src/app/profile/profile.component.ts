import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { PostData } from "../types/post-data-types";
import { SupabaseService } from "../services/supabase.service";
@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  userId!: string;
  constructor(private supabaseService: SupabaseService) {
    this.supabaseService.getPostsOfOneUser();
  }
}

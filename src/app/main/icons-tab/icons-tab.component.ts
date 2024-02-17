import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { SupabaseService } from "src/app/services/supabase.service";
import { NestService } from "src/app/services/nest.service";

@Component({
  selector: "app-icons-tab",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./icons-tab.component.html",
  styleUrls: ["./icons-tab.component.scss"],
})
export class IconsTabComponent {
  constructor(private nestService: NestService) {}
  iconsTabVisible: boolean = true;
  writeSomethingSelected: boolean = false;
  postSomethingSelected: boolean = false;
  body!: any;
  uploadedImage!: string;
  upload = new FormGroup({
    image: new FormControl(""),
    caption: new FormControl(""),
  });

  addPostWithImage(input: any) {
    // console.log(this.body);
    this.nestService.addPost(this.body, input);
  }
  previewImage(event?: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e: any) => {
      this.uploadedImage = e.target.result;
    };
  }
  createImageForUpload(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = async (e) => {
      console.log(e.target?.result);
      this.body = await e.target?.result;
    };
  }
  async resizeImage(image: string) {
    // let resizeimage = await Image.Image.load(image);
    // resizeimage.resize({height: 200}).save("image.png");
  }
}

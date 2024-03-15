import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ImageSelectService {
  constructor() {}
  selectedImage: BehaviorSubject<string> = new BehaviorSubject("");
  getSelectedImage = this.selectedImage.asObservable();
  setSelectedImage(url: string) {
    this.selectedImage.next(url);
    // console.log("IN SERVICE: ", url);
  }
}

import { LoginDialogBoxComponent } from "./login/login-dialog-box/login-dialog-box.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  ReactiveFormsModule,
  FormsModule,
  NgModel,
  NgForm,
} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { LeftBarComponent } from "./main/left-bar/left-bar.component";
import { MainComponent } from "./main/main.component";
import { ContentPaneComponent } from "./content-pane/content-pane.component";
import { FeedComponent } from "./shared/feed/feed.component";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginComponent,
    LoginDialogBoxComponent,
    LeftBarComponent,
    MainComponent,
  ],
  exports: [
    LoginComponent,
    LoginDialogBoxComponent,
    HttpClientModule,
    MainComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { PostData } from "./types/post-data-types";
import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContentPaneComponent } from "./content-pane/content-pane.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "home", component: ContentPaneComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}

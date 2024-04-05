import { PostData } from "./types/post-data-types";
import { NgModule } from "@angular/core";
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
// import { ProfileComponent } from ".main/profile/profile.component";
import { ContentPaneComponent } from "./main/content-pane/content-pane.component";
import { ProfileComponent } from "./main/profile/profile.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "home",
        component: ContentPaneComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

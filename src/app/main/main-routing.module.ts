import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ContentPaneComponent } from "../content-pane/content-pane.component";
import { LeftBarComponent } from "./left-bar/left-bar.component";

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

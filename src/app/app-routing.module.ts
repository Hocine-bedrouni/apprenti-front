import {RouterModule, Routes} from "@angular/router";
import {UserPageComponent} from "./user-page/user-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [{path:"user", component: UserPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

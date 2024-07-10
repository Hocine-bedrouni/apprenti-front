import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {AppComponent} from "./app.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [AppComponent, UserPageComponent],
  imports: [CommonModule, RouterModule, FormsModule, BrowserModule, AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

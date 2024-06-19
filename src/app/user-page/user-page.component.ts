import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  private name: string = "";
  public fname: string = "";

  register() {

  }

  save(event: KeyboardEvent, name: string) {
    console.log(event);
    console.log(this.fname);
  }
}

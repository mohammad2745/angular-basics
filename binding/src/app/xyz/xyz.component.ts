import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent {
  public name = "John";
  public myId = "testId";
  public isDisabled = true;

  greetUser() {
    return "Hello " + this.name;
  }
}

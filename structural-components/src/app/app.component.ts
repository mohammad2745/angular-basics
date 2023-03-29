import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public color = "yellow";
  public colors = ["red", "green", "blue", "yellow"]
  title = 'structural-components';

  displayName = true;
}

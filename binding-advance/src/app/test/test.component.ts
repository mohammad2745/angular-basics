import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { AppComponent } from '../../../../binding/src/app/app.component';

// @NgModule {
//   declarations: [
//     AppComponent,
//   ]
// }

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  public name = "";
}

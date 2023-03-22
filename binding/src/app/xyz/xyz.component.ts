import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent {
  //Property Binding
  public name = "John";
  public myId = "testId";

  //Class Binding
  public isDisabled = true;
  public successClass = "text-success";
  public isSpecial = true;
  public hasError = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  //Style Binding
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  //Event Binding
  public greeting = "";

  onClick(event: Event){
    console.log("Welcome To Angular event binding.");
    console.log(event);
    
    this.greeting = "Welcome To Angular event binding."
  }

  greetUser() {
    return "Hello " + this.name;
  }
}

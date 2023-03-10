import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  userName: string = '';

  constructor() {}

  getValue( event: Event): string {
    console.log( event)
    console.log( this.userName )
    return (event.target as HTMLInputElement).value;
  }
}

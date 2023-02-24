import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {
  @Input() value: String = ''
  @Output() valueChange = new EventEmitter<string>()

  ngOnChanges(){
    // console.log(this.value)
  }

  changeaValue(event: Event) {
    let eventValue: string = (event.target as HTMLInputElement).value
    this.value = eventValue
    this.valueChange.emit(eventValue)
  }


}

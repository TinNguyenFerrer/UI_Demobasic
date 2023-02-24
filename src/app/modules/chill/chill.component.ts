import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chill',
  templateUrl: './chill.component.html',
  styleUrls: ['./chill.component.css']
})
export class ChillComponent {
  @Input() item: string = ""
  @Output() changeItem = new EventEmitter<string>()
  
  modifyItem(){
    this.changeItem.emit(this.item)
  }

  
  // changeFromChill(itemChang: string){
  //   this.item = itemChang
  // }
}

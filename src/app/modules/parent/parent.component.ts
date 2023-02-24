import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  itemParent: string = "item from parent";

  changeItem(item?: string) {
    if (item) {
      this.itemParent = item;
    }
  }
}

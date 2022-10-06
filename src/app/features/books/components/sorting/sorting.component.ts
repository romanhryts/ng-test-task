import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent {
  @Output() selectEvent = new EventEmitter<string>();
  @Output() updateInput = new EventEmitter<string>();
  @Output() sortByDateEvent = new EventEmitter<string>();
  @Output() sortByPagesEvent = new EventEmitter<string>();

  constructor() {
  }

  onSelect(element: HTMLSelectElement): void {
    this.selectEvent.emit(element.value);
  }

  updateTerm(element: HTMLInputElement): void {
    this.updateInput.emit(element.value)
  }

  onSortByDate(element: HTMLInputElement): void {
    this.sortByDateEvent.emit(element.id);
  }

  onSortByPages(element: HTMLInputElement): void {
    console.log(element.id);
    this.sortByPagesEvent.emit(element.id);
  }

}

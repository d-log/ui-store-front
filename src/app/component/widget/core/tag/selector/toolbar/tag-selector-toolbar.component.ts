import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-selector-toolbar',
  templateUrl: './tag-selector-toolbar.component.html',
  styleUrls: ['./tag-selector-toolbar.component.css']
})
export class TagSelectorToolbarComponent {

  @Output() searchWithNewString = new EventEmitter<string>();
  @Output() close = new EventEmitter<boolean>();
  @Output() new = new EventEmitter<boolean>();

  searchStringChanged(event: any) {
    const string = (<HTMLInputElement>event.srcElement).value;
    this.searchWithNewString.emit(string);
  }

  onClose() {
    this.close.emit(true);
  }

  onNew() {
    this.new.emit(true);
  }
}

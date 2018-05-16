import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tag-creator-and-selector-toolbar',
  templateUrl: './tag-creator-and-selector-toolbar.component.html',
  styleUrls: ['./tag-creator-and-selector-toolbar.component.css']
})
export class TagCreatorAndSelectorToolbarComponent {

  @Output() searchWithNewString = new EventEmitter<string>();
  @Output() closeButtonClicked = new EventEmitter<boolean>();

  searchStringChanged(event: any) {
    const string = (<HTMLInputElement>event.srcElement).value;
    this.searchWithNewString.emit(string);
  }

  onCloseButtonClicked() {
    this.closeButtonClicked.emit(true);
  }
}

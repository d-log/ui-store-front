import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-selector-toolbar',
  templateUrl: './tag-selector-toolbar.component.html',
  styleUrls: ['./tag-selector-toolbar.component.css']
})
export class TagSelectorToolbarComponent implements AfterViewInit {
  @Input() tagNameLikeString: string;
  @Output() tagNameLikeStringChange = new EventEmitter<string>();
  @Output() close = new EventEmitter<boolean>();
  @Output() new = new EventEmitter<boolean>();
  @ViewChild('input') inputElement;

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus();
  }

  onTagNameLikeStringChange() {
    this.tagNameLikeStringChange.emit(this.tagNameLikeString);
  }

  onClose() {
    this.close.emit(true);
  }

  onNew() {
    this.new.emit(true);
  }
}

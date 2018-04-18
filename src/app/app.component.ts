import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'app';
//   masonryItems = [
//     '1',
//     '1',
//     '1',
//   ];
//
//   _masonry: Masonry;
//
// // Get ng masonry grid instance first
//   onNgMasonryInit($event: Masonry) {
//     this._masonry = $event;
//   }
//
//   appendItems() {
//     if (this._masonry) { // Check if Masonry instance exists
//       this._masonry.setAddStatus('append'); // set status to 'append'
//       this.masonryItems.push('1'); // some grid items: items
//     }
//   }
//
//   // Remove selected item from NgMasonryGrid, For example, (click)="removeItem($event)" event binding on grid item
// // Note: 'id' on ng-masonry-grid is required to remove actual item from the list
//   removeItem($event: any) {
//     console.log('removing');
//     if (this._masonry) {
//       this._masonry.removeItem($event.currentTarget)  // removeItem() expects actual DOM (ng-masonry-grid-item element)
//         .subscribe((item: MasonryGridItem) => { // item: removed grid item DOM from NgMasonryGrid
//           if (item) {
//             const id = item.element.getAttribute('id'); // Get id attribute and then find index
//             const index = id.split('-')[2];
//             console.log('removing index: ' + index);
//             // remove grid item from Masonry binding using index (because actual Masonry items order
//             // is different from this.masonryItems items)
//             this.masonryItems.splice(index, 1);
//           }
//         });
//     }
//   }
//
//   prependItems() {
//     if (this._masonry) {
//       // set status to 'prepend' before adding items to NgMasonryGrid otherwise default: 'append' will applied
//       this._masonry.setAddStatus('prepend');
//       this.masonryItems.splice(0, 0, '1');
//     }
//   }
}

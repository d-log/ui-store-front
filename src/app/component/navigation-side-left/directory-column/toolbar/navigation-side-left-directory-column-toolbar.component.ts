import {Component, Input} from '@angular/core';
import {DirectoryModel} from '../../../../service/core/directory/model/directory-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-side-left-directory-column-toolbar',
  templateUrl: './navigation-side-left-directory-column-toolbar.component.html',
  styleUrls: ['./navigation-side-left-directory-column-toolbar.component.css']
})
export class NavigationSideLeftDirectoryColumnToolbarComponent {

  @Input() directoryModel: DirectoryModel;

  constructor(private router: Router) {
  }

  viewDirectoryInContent() {
    this.router.navigate(['/log-tile/archive'], {queryParams: {directory: this.directoryModel.id}});
  }
}

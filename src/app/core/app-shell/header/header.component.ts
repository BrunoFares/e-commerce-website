import { Component } from '@angular/core';
import { ListItemsService } from '../../../features/list-items/service/list-items.service';
import { ListItemsComponent } from '../../../features/list-items/component/list-items.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  displayCategories = false;
  displayOptions = false;

  constructor(private router: Router) { }

  onSearch() {
    this.router.navigateByUrl('products').catch(() => {
      this.router.navigateByUrl('../products')
    })
  }

  displayCats() {
    this.displayCategories = true;
  }

  hideCats() {
    this.displayCategories = false;
  }

  toggleOpts() {
    this.displayOptions = this.displayOptions ? false : true;
  }
}

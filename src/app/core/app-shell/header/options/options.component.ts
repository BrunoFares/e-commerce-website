import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
  searchQuery?: string;

  router = inject(Router);

  onSearch() {
    this.router.navigateByUrl('products').catch(() => {
      this.router.navigateByUrl('../products')
    })
  }
}

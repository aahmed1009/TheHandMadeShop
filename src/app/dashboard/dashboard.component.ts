import { Component } from '@angular/core';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  categories: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onCategoryAdded(): void {
    this.loadCategories();
  }
}

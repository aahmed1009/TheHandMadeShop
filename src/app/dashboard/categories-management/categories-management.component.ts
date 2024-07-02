import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-categories-management',
  templateUrl: './categories-management.component.html',
  styleUrls: ['./categories-management.component.css'],
})
export class CategoriesManagementComponent {
  @Output() categoryAdded = new EventEmitter<void>();
  categoryForm: FormGroup;
  categories: any[] = [];
  editingCategoryId: number | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      if (this.editingCategoryId !== null) {
        // Update existing category
        this.apiService
          .updateCategory(this.editingCategoryId, this.categoryForm.value)
          .subscribe({
            next: (res) => {
              console.log('Category updated successfully', res);
              this.loadCategories(); // Refresh the list of categories
              this.categoryAdded.emit(); // Emit the event
              this.resetForm(); // Reset form after successful update
            },
            error: (err) => {
              console.error('Error updating category', err);
            },
          });
      } else {
        // Add new category
        this.apiService.addCategory(this.categoryForm.value).subscribe({
          next: (res) => {
            console.log('Category added successfully', res);
            this.loadCategories(); // Refresh the list of categories
            this.categoryAdded.emit(); // Emit the event
            this.resetForm(); // Reset form after successful addition
          },
          error: (err) => {
            console.error('Error adding category', err);
          },
        });
      }
    }
  }

  editCategory(category: any): void {
    this.editingCategoryId = category.id;
    this.categoryForm.patchValue({
      name: category.name,
      description: category.description,
    });
  }

  deleteCategory(categoryId: number): void {
    this.apiService.deleteCategory(categoryId).subscribe({
      next: (res) => {
        console.log('Category deleted successfully', res);
        this.loadCategories();
      },
      error: (err) => {
        console.error('Error deleting category', err);
      },
    });
  }

  resetForm(): void {
    this.editingCategoryId = null;
    this.categoryForm.reset();
  }
}

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @Input() categories: any[] = [];
  addProductForm: FormGroup;
  selectedFiles: File[] = [];
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService
  ) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category_id: ['', Validators.required],
      add_by: [this.authService.getUserId(), Validators.required], // Use dynamic user ID
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error loading categories', err);
      },
    });
  }

  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  onSubmit(): void {
    if (this.addProductForm.valid && this.selectedFiles.length > 0) {
      this.loading = true;
      const formData = new FormData();
      formData.append('name', this.addProductForm.get('name')?.value);
      formData.append(
        'description',
        this.addProductForm.get('description')?.value
      );
      formData.append('price', this.addProductForm.get('price')?.value);
      formData.append('stock', this.addProductForm.get('stock')?.value);
      formData.append(
        'category_id',
        this.addProductForm.get('category_id')?.value
      );
      formData.append('add_by', this.addProductForm.get('add_by')?.value);
      this.selectedFiles.forEach((file, index) => {
        formData.append('images[]', file, file.name);
      });

      this.apiService.addProduct(formData).subscribe({
        next: (res) => {
          this.loading = false;
          this.successMessage = 'Product added successfully';
          this.errorMessage = '';
          console.log('Product added successfully', res);
        },
        error: (err) => {
          this.loading = false;
          this.successMessage = '';
          this.errorMessage = 'Error adding product';
          console.error('Error adding product', err);
        },
      });
    }
  }
}

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  addProductForm: FormGroup;
  categories: any[] = [];
  selectedFile: File | null = null;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category_id: ['', Validators.required],
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
      this.selectedFile = event.target.files[0];
    }
  }
  onSubmit(): void {
    if (this.addProductForm.valid && this.selectedFile) {
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
      formData.append('image', this.selectedFile);
      this.apiService.addProduct(formData).subscribe({
        next: (res) => {
          console.log('Product added successfully', res);
        },
        error: (err) => {
          console.error('Error adding product', err);
        },
      });
    }
  }
}

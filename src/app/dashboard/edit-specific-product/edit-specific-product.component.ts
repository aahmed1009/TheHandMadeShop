import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-edit-specific-product',
  templateUrl: './edit-specific-product.component.html',
  styleUrls: ['./edit-specific-product.component.css'],
})
export class EditSpecificProductComponent {
  editProductForm: FormGroup;
  categories: any[] = [];
  productId: number;
  selectedFiles: File[] = [];
  existingImages: string[] = [];
  imagesToDelete: string[] = [];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category_id: ['', Validators.required],
    });
    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
    this.loadProduct();
  }

  loadProduct(): void {
    this.apiService.getProductById(this.productId).subscribe((data: any) => {
      this.editProductForm.patchValue(data);
      if (data.images) {
        this.existingImages = JSON.parse(data.images).map(
          (img: string) => `http://localhost/APIS/uploads/${img}`
        );
      }
    });
  }

  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  onImageDelete(image: string): void {
    const imageName = image.split('/').pop(); // Extract the base name
    if (imageName) {
      this.imagesToDelete.push(imageName);
      this.existingImages = this.existingImages.filter((img) => img !== image);
    }
  }

  onSubmit(): void {
    if (this.editProductForm.valid) {
      const formData = new FormData();
      formData.append('name', this.editProductForm.get('name')?.value);
      formData.append(
        'description',
        this.editProductForm.get('description')?.value
      );
      formData.append('price', this.editProductForm.get('price')?.value);
      formData.append('stock', this.editProductForm.get('stock')?.value);
      formData.append(
        'category_id',
        this.editProductForm.get('category_id')?.value
      );
      formData.append('delete_images', JSON.stringify(this.imagesToDelete));
      this.selectedFiles.forEach((file, index) => {
        formData.append('images[]', file, file.name);
      });

      this.apiService.updateProduct(this.productId, formData).subscribe({
        next: (res) => {
          console.log('Product updated successfully', res);
          this.router.navigate(['/dashboard/edit-delete-product']);
        },
        error: (err) => {
          console.error('Error updating product', err);
        },
      });
    }
  }
}

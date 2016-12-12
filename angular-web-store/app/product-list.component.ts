import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router }  from '@angular/router'


@Component({
  moduleId: module.id,
  selector: 'my-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: [ 'product-list.component.css' ]
})
export class ProductListComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;


  constructor(private router: Router,private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

  addNewProduct(): void {
    this.router.navigate(['/productform']);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }
  delete(product: Product): void {
    this.productService
      .delete(product.id)
      .then(() => {
        this.products = this.products.filter(h => h !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
  }
}

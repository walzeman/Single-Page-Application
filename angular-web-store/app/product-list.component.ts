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

  getHeroes(): void {
    this.productService.getHeroes().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}

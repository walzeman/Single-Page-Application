import { Component } from '@angular/core';
import { Product } from './product';


@Component({
    selector: 'product-form',
    templateUrl: 'app/product-form.component.html'
})
export class ProductFormComponent {
    categories = ['Phone', 'Tablet', 'Music Player', 'Watch'];
    product = new Product(3, 'iPod', this.categories[2], 'Listen music');
    submitted = false;

    onSubmit() {
     this.submitted = true;
    }

    newProduct() {
        
        this.product = new Product(42, '', '');
    }

  
}
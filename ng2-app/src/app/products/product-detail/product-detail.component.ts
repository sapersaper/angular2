import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { Product, ProductService } from '../product.service';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css'],
  providers: [ProductService]
})

export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  editProductName: string;
  private sub: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getProduct(id)
        .then(product => {
          if (product) {
            this.product = product;
            this.editProductName = product.name;
          } else {
            this.gotoProducts();
          }

        });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoProducts() {
    this.router.navigate(['/products']);
  }
  cancel() {
    this.gotoProducts();
  }
  save() {
    this.product.name = this.editProductName;
    this.gotoProducts();
  }
}

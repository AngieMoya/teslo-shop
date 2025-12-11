import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
})
export class ProductPage {
  activatedRoute = inject(ActivatedRoute); // this line was omit in my try
  productService = inject(ProductsService);

  productIdSlug = this.activatedRoute.snapshot.params['idSlug']; // this line was omit in my try

  productResource = rxResource({
    params: () => ({ idSlug: this.productIdSlug }),
    stream: ({ params }) => {
      console.log(params);
      return this.productService.getProductByIdSlug(params.idSlug);
    },
  });
}

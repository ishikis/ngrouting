import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //route params
    this.route.paramMap.subscribe(x => {
      let id = x.get('id');
    });

    let id = this.route.snapshot.paramMap.get('id');

    //query Params
    this.route.queryParamMap.subscribe(x => {
      let id = x.get('id');
    });

    id = this.route.snapshot.queryParamMap.get('id');
  }


  loadProduct() {
    this.router.navigate(['/products'], { queryParams: { page: 1 } });
  }
}

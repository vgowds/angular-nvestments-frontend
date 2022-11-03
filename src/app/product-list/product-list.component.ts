import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  posts: any;
  constructor(private service: PostService) {}

  share(name: any) {}
  ngOnInit() {}
  getFundDetails(fundname: any) {
    var displayTxt: any;
    this.service.getPosts(fundname).subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

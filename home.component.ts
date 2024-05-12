import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected property name and changed to array
})
export class HomeComponent {
  product: any = [
    { image: 'https://img.freepik.com/free-vector/new-collection-banner-template_1361-1325.jpg', name: 'Womans Collection', link: '/saree' },
    { image: 'https://img.freepik.com/free-photo/pink-baby-s-dress-with-headwear-pair-socks-milk-bottle-pacifier-wooden-table_23-2147900740.jpg?w=1060&t=st=1714831274~exp=1714831874~hmac=4b2072cdf9ad544a40b631d804eea0e8c133161a568f8587dccfca3df542e444', name: 'Kids Collection', link: '/kids' },
    { image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'mens collection', link: '/mens' }
  ];
}

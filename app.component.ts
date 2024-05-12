import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from './wishlist.service';
interface cusobj {
  image?: string;
  type: string;
  link?: string;
  text?: string;
  dropdownMenu?:Array  <string>
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  wishlistItemCount: number = 0;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.wishlistItemCount.subscribe(count => {
      this.wishlistItemCount = count;
    });
  }


  // searchQuery: string = '';

  // constructor(private router: Router) {}

  // onSearch() {
  //   switch (this.searchQuery.toLowerCase()) {
  //     case 'mens collection':
  //       this.router.navigate(['/mens']);
  //       break;
  //     case 'womans collection':
  //       this.router.navigate(['/saree']);
  //       break;
  //     case 'kids collection':
  //       this.router.navigate(['/kids']);
  //       break;
  //     default:
  //       // Handle other search queries or show an error message
  //       console.log('Search query not recognized:', this.searchQuery);
  //       break;
  //   }
  // }
  
  
}

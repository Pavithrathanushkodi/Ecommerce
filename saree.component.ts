import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrl: './saree.component.css'
})
export class SareeComponent {

  
  product : any =[
  {image:'https://images.meesho.com/images/products/309662865/lwhyg_512.webp',platform:'meesho',price:372, Availability:'yes',link:'https://www.meesho.com/s/p/6py5j7?utm_source=s_w'},
{image:'https://images.meesho.com/images/products/406380931/m0ko5_512.webp', platform:'Meesho',price:572, Availability:'yes',link:'https://www.meesho.com/s/p/6py5j7?utm_source=s_w'},
{
  image:'https://images.meesho.com/images/products/390320630/lli9d_512.webp',platform:'Meesho',price:450,Availability:'yes',link:'https://www.meesho.com/s/p/6gdxbq?utm_source=s_w'
},
{image:'https://assets.ajio.com/medias/sys_master/root/20231228/JgbA/658c86d1afa4cf41f5f0cc71/-473Wx593H-466925463-white-MODEL6.jpg', platform:'Ajio',price:760,Availability:'yes',link:'https://www.ajio.com/gulmohar-jaipur-women-floral-print-v-neck-flared-kurta/p/466925463_white'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/9/6/s-1-balloon-top-zilcon-original-imagxx7sz4uzffyy.jpeg?q=70&crop=false', platform:'flipkart', price:'304', Availability:'yes', link:'https://www.flipkart.com/rahi-trendz-casual-solid-women-pink-top/p/itm7df93eb9fc9d5?pid=TOPGY4YZVTHXAGQX&cmpid=product.share.pp&_refId=PP.13dbcfb7-44f4-41de-bc1a-daade86411ba.TOPGY4YZVTHXAGQX&_appId=WA'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/top/l/e/y/s-zip-women-top-style-prezone-original-imagkfe6vaf75msj.jpeg?q=70', platform:'Flipkart', price:'179', Availability:'yes', link:'https://www.flipkart.com/swaggish-casual-solid-women-black-top/p/itm5a710776a7761?pid=TOPGKFE7YNPMWS5F&cmpid=product.share.pp&_refId=PP.5e010545-12db-405b-a48f-2ca75de99afa.TOPGKFE7YNPMWS5F&_appId=WA'},
{image:"https://rukminim2.flixcart.com/image/832/832/l5e81ow0/t-shirt/c/u/d/s-dlx-blackbajupatti-loveheart-wiser-original-imagg35jmh8zuq3u.jpeg?q=70&amp;crop=false", platform:'Flipkart', price:'315', Availability:'yes', link:'"https://rukminim2.flixcart.com/image/832/832/l5e81ow0/t-shirt/c/u/d/s-dlx-blackbajupatti-loveheart-wiser-original-imagg35jmh8zuq3u.jpeg?q=70&amp;crop='},
{image:'https://rukminim2.flixcart.com/image/416/416/xif0q/hair-straightener/f/i/l/3-in-1-hot-air-brush-for-women-one-step-dryer-volumizer-and-original-imahyg5hzahhwjge.jpeg?q=70&amp;crop=false" ', platform:'Flipkart', price:'1999', Availability:'yes', link:'https://www.flipkart.com/urbanyog-3-1-hot-air-brush-women-one-step-dryer-volumizer-hair-straightener/p/itmb6c24f2078e7a?pid=HSTGZ8V6VK2XKBHU&cmpid=product.share.pp&_refId=PP.e0ab04f3-afea-4344-acf4-f6912e3b14a6.HSTGZ8V6VK2XKBHU&_appId=WA'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/g/y/f/women-pink-hand-held-bag-ev-lo-hand-held-bag-evolic-original-imagxxfavdknexnc.jpeg?q=70&amp;crop=false', platform:'Flipkart', price:'214', Availability:'yes', link:'https://www.flipkart.com/evolic-women-pink-hand-held-bag/p/itmc30debed7c9d5?pid=HMBGZKZS4TECGSRY&cmpid=product.share.pp&_refId=PP.dc085229-fe19-4a83-b3d6-ea57ff97aa9c.HMBGZKZS4TECGSRY&_appId=WA'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/dress/n/d/3/-original-imagu22aymah8mmc.jpeg?q=70&amp;crop=false', platform:'Flipkart', price:'489', Availability:'yes', link:'https://www.flipkart.com/absorbing-women-asymmetric-multicolor-dress/p/itm1fdc3a785c76b?pid=DREFZR6W8FRNCWMG&cmpid=product.share.pp&_refId=PP.2745f14f-87fd-4600-b583-6fb10a06bc17.DREFZR6W8FRNCWMG&_appId=WA'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/dress/k/a/k/m-6023-attire-empire-original-imahyhgkjtgey8xk.jpeg?q=70&amp;crop=false"', platform:'Flipkart', price:'359', Availability:'yes', link:'https://www.flipkart.com/attire-empire-women-bodycon-black-dress/p/itm36c07ba05e862?pid=DREGSKW3ZXTUZGTK&cmpid=product.share.pp&_refId=PP.a467428d-d0d8-4841-be81-46cc181cb3a3.DREGSKW3ZXTUZGTK&_appId=WA'},
{image:'https://assets.ajio.com/medias/sys_master/root/20240223/giwj/65d7ef1a16fd2c6e6a16be06/-473Wx593H-464852642-cream-MODEL2.jpg', platform:'Ajio', price:'949', Availability:'yes', link:'https://www.ajio.com/tulsattva-floral-print-fit-flare-dress-with-waist-tie-up/p/464852642_cream'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/dress/9/m/u/xs-j0341-dr-janasya-original-imag55jxueezhzav-bb.jpeg?q=70&amp;cro', platform:'flipkart', price:'799', Availability:'yes', link:'https://www.flipkart.com/janasya-women-fit-flare-blue-dress/p/itma5786ab0c7183?pid=DREG55JX65VSC98W&cmpid=product.share.pp&_refId=PP.1d83b6a9-4279-4367-a1ac-4e126147aabc.DREG55JX65VSC98W&_appId=WA'},
{image:'https://assets.ajio.com/medias/sys_master/root/20231016/L6FL/652c5051afa4cf41f5466bdf/-473Wx593H-466711316-blue-MODEL.jpg',platform:'Ajio',price:'725',Availability:'yes',link:'https://www.ajio.com/fashion-2-wear-women-floral-print-fit-flare-dress/p/466711316_blue'},
{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/dress/u/y/8/m-na-ttj6008191-tokyo-talkies-original-imagz4rfzpyzns9b.jpeg?q=70&amp;crop=false',platform:'Flipkart',price:'719',Availability:'yes',link:'https://www.flipkart.com/tokyo-talkies-women-maxi-blue-black-light-blue-dress/p/itm377c4eada73ea?pid=DREGZ4RFEFGDS9FD&cmpid=product.share.pp&_refId=PP.04e93daa-13a6-4ed3-98d9-e24d907823aa.DREGZ4RFEFGDS9FD&_appId=WA'}
  ]
  
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  addToWishlist(item: any) {
    this.wishlistService.addToWishlist(item);
  }
  
  

}

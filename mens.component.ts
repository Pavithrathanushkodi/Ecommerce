import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.css'
})
export class MensComponent {

  items : any= [{image:'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/r/u/i/xl-1-jakt-denim-lgrey-urbano-fashion-original-imafy3jhzfrumpap-bb.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:1019 , Availability:'yes',link:'https://www.flipkart.com/urbano-fashion-full-sleeve-washed-men-denim-jacket/p/itm4f655b9bdb363?pid=JCKFY8REHQDGCGUA&cmpid=product.share.pp&_refId=PP.7693bdb7-77d5-4896-8acf-771cc70e955b.JCKFY8REHQDGCGUA&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/w/4/r/l-yes-multicolor-mens-sanjuex-original-imagraynnnefptjr.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:674, Availability:'yes',link:'https://www.flipkart.com/sanjuex-full-sleeve-colorblock-men-jacket/p/itmd8b8e9f94548e?pid=JCKGRAYNHGPEQPGH&cmpid=product.share.pp&_refId=PP.6d7c36c3-9640-4e54-a1c6-a989a5230689.JCKGRAYNHGPEQPGH&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/o/q/p/xxl-no-jacket-crastic-original-imagmvg4puph4fwh.jpeg?q=70&amp;crop=false',platform:'flipkart',price:579,Availability:'yes',link:'https://www.flipkart.com/crastic-full-sleeve-graphic-print-men-jacket/p/itm91188efb34ea6?pid=JCKGMVG4CX44BDGH&cmpid=product.share.pp&_refId=PP.d7cc6d32-20b6-402f-a8dd-0ce77464ca42.JCKGMVG4CX44BDGH&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/t/q/7/3xl-ss19-rnhd11-lpr-alan-jones-original-imaghf67yhv6d5zs.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:779 , Availability:'yes',link:'https://www.flipkart.com/alan-jones-full-sleeve-solid-men-sweatshirt/p/itm8e35efdc445e2?pid=SWSGHF6FPMPJ2QN5&cmpid=product.share.pp&_refId=PP.c6ebc5e0-1663-49fd-8dfe-6ae53e18661e.SWSGHF6FPMPJ2QN5&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/832/832/k30h8y80/sweatshirt/f/g/m/s-ss19-rnhd11-charcoal-alan-jones-original-imafm8rzxt79r3gp.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:'779',Availability:'yes',link:'https://www.flipkart.com/alan-jones-full-sleeve-solid-men-sweatshirt/p/itm34b6849174d2e?pid=SWSGGYPQZUX7AZSF&lid=LSTSWSGGYPQZUX7AZSFRGNFED&marketplace=FLIPKART&sattr[]=color&st=color'},
  {image:'https://rukminim2.flixcart.com/image/832/832/l5h2xe80/sweatshirt/8/t/k/xxl-nevermind-hoodie-more-more-original-imagg57hbzgsejfm.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:'669',Availability:'yes',link:'https://www.flipkart.com/more-full-sleeve-graphic-print-men-sweatshirt/p/itm7149801d958b6?pid=SWSGG5HF4AJZPD4G&cmpid=product.share.pp&_refId=PP.ccbe1af9-dfd3-4c5a-a199-425d0ffa53f7.SWSGG5HF4AJZPD4G&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/416/416/koenl3k0/trimmer/k/d/f/0-5-20-mm-stainless-steel-nht-1052-usb-corded-cordless-nova-original-imag2v6sawwdgxp4.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:559 , Availability:'yes',link:'https://www.flipkart.com/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings/p/itm08a4a983d35d1?pid=TMRFZ9NQWGHEKQBS&cmpid=product.share.pp&_refId=PP.1a2a16f7-4f7b-4050-8cf9-541519130548.TMRFZ9NQWGHEKQBS&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/s/2/j/no-2-m-unstitched-na-2ct-suit-fabric-ritanj-original-imagzq937autzgyp.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:671, Availability:'yes',link:'https://www.flipkart.com/ritanj-viscose-rayon-solid-suit-fabric/p/itm5a5a0e0cc1792?pid=FABGZQF9FSWSQKN2&cmpid=product.share.pp&_refId=PP.c9272d84-f12a-4d16-b24f-d1df3584153e.FABGZQF9FSWSQKN2&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/416/416/xif0q/waist-bag/m/x/9/money-mobile-card-belt-documents-kit-books-dairy-messenger-cross-original-imagy3uhz9kazfzr.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:171 , Availability:'yes',link:'https://www.flipkart.com/fkhbags-money-mobile-card-belt-documents-kit-books-dairy-messenger-cross-body-pouch-waist-bag-elegant-style-travel-pouch-passport-holder-adjustable-strap/p/itme9e54cf421545?pid=WSBGZHERKUSBNAP9&cmpid=product.share.pp&_refId=PP.96001148-44d2-443a-a63a-8f05ab4ed63f.WSBGZHERKUSBNAP9&_appId=WA'},
  {image:'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/5/h/v/1-sk-pg-4075-sgrn-slvr-basic-for-men-with-day-and-date-display-original-imahykrz7g7gr4ur.jpeg?q=70&amp;crop=false', platform:'Flipkart',price:312, Availability:'yes',link:'https://www.flipkart.com/provogue-basic-analog-watch-men-day-date-display-sports-formal-casual-series/p/itmc50bda268ea28?pid=WATGHYFRRYMBQ3EE&cmpid=product.share.pp&_refId=PP.1bc50b7a-07ef-48de-a078-fcb75acee238.WATGHYFRRYMBQ3EE&_appId=WA'},
  {image:'', platform:'Meesho',price:0 , Availability:'yes',link:''}
  ]

 
}

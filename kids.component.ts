import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
items : any= [
  {image:'https://assets.ajio.com/medias/sys_master/root/20230628/kpek/649bbef3eebac147fc1ec14a/-1117Wx1400H-465872013-green-MODEL.jpg', platform:'Ajio',price:512, Availability:'yes',link:'https://www.ajio.com/bn-being-naughty-floral-pants-with-top/p/465872013_green'},
  {image:'https://images.meesho.com/images/products/341973860/fglu9_512.webp', platform:'Meesho',price:200 , Availability:'yes',link:'https://www.meesho.com/s/p/5nlopw?utm_source=s_w'},
  {image:'https://images.meesho.com/images/products/382807815/rb0zs_512.webp', platform:'Meesho',price:333 , Availability:'yes',link:'https://www.meesho.com/s/p/6bwwef?utm_source=s_w'},
  {image:'https://images.meesho.com/images/products/383579395/tx2tf_512.webp', platform:'Meesho',price:200 , Availability:'yes',link:'https://www.meesho.com/s/p/6cdfr7?utm_source=s_w'},
  {image:'https://assets.ajio.com/medias/sys_master/root/20230519/u500/64677c2b42f9e729d79c0c11/-473Wx593H-466168870-red-MODEL.jpg', platform:'Ajio',price:630 , Availability:'yes',link:'https://www.ajio.com/tior-leopard-print-fit-flare-dress/p/466168870_red'},
  {image:'https://assets.ajio.com/medias/sys_master/root/20230619/0RQ8/64904281d55b7d0c6373ec91/-473Wx593H-466285441-aqua-MODEL.jpg', platform:'Ajio',price:1433 , Availability:'yes',link:'https://www.ajio.com/pspeaches-striped-3-piece-kurta-suit-set/p/466285441_aqua'},
  {image:'https://assets.ajio.com/medias/sys_master/root/20240417/597M/661efba216fd2c6e6aba4a11/-473Wx593H-467257940-pink-MODEL4.jpg', platform:'Ajio',price:720, Availability:'yes',link:'https://www.ajio.com/peeloo-boys-colourblock-shirt-shorts-set/p/467257940_pink'},
{image:'https://assets.ajio.com/medias/sys_master/root/20240423/Qlye/66270e0a05ac7d77bb1e6f57/-473Wx593H-467270258-multi-MODEL.jpg', platform:'Ajio',price:1000 , Availability:'yes',link:'https://www.ajio.com/drijha-embellished-embroidered-lehenga-with-choli/p/467270258_multi'}
]
  
}

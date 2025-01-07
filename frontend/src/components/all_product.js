/*
import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

*/

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";



let all_product = [
  {
    id: 1,
    title: "Helmet",
    reviews: "150",
    availability: true,
    brand: "Rider",
    category: "Helmet",
    sku: "BE45VGTRK",
    price: 450,
    previousPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["gray", "violet", "red"],
    image: image1
  },
  {
    id: 2,
    name: "KYT NCR Hemlets",
    category: "Helmets",
    image: image2,
    new_price: 12500.0,
    old_price: 17000.5,
  },
  {
    id: 3,
    name: "Rynox Riding Jackets",
    category: "Jackets",
    image: image3,
    new_price: 18500.0,
    old_price: 22000.5,
  },
  {
    id: 4,
    name: "Rynox Safety Guards",
    category: "Gears",
    image: image4,
    new_price: 22500.0,
    old_price: 27000.5,
  },
  {
    id: 5,
    name: "Mobile phone Mount",
    category: "accessories",
    image: image5,
    new_price: 5000.0,
    old_price: 6000.5,
  },
  {
    id: 6,
    name: "Rynox Riding Gloves",
    category: "Gears",
    image: image6,
    new_price: 5550.0,
    old_price: 7500.5,
  },
  {
    id: 7,
    name: "KYT NCR Hemlets Visiors",
    category: "Helmets",
    image: image7,
    new_price: 4500.0,
    old_price: 7000.5,
  },
  {
    id: 8,
    name: "Alpinestar Riding Shoes",
    category: "Shoes",
    image: image8,
    new_price: 12500.0,
    old_price: 17000.5,
  },
  {
    id: 9,
    name: "Dirt Helmets Riding goggles",
    category: "Helmets",
    image: image9,
    new_price: 3500.0,
    old_price: 5000.5,
  },
  {
    id: 10,
    name: "Rynox Riding Pants",
    category: "Gears",
    image: image10,
    new_price: 10500.0,
    old_price: 15000.5,
  },
];



export default all_product;

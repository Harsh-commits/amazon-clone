import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home_conatiner">
        {/* <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt="home_background"
        /> */}
        <Carousel className="carousel" autoPlay infiniteLoop useKeyboardArrows>
          <div>
            <img
              className="home_image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
            />
          </div>
        </Carousel>

        {/* row 1 */}

        <div className="home__row">
          <Product
            id={12345}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UL320_.jpg"
            price={19.9}
            rating={5}
          />
          <Product
            id={90876}
            title="Dell Inspiron 7580 Core i5 8th Gen 15.6-inch FHD Laptop (8GB/1TB + 128GB SSD/...."
            image="https://m.media-amazon.com/images/I/7189nNwXCyL._AC_UY218_.jpg"
            price={1000.5}
            rating={5}
          />
        </div>

        {/* row 2 */}

        <div className="home__row">
          <Product
            id={30873}
            title="pTron Bassbuds in-Ear True Wireless Bluetooth 5.0 Headphones with Hi-Fi Deep Bass, 20Hrs..."
            image="https://m.media-amazon.com/images/I/41ImsZy3u5L.__AC_SY200_.jpg"
            price={98.4}
            rating={4}
          />
          <Product
            id={12453}
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g ...."
            image="https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg"
            price={40.5}
            rating={4}
          />
          <Product
            id={23467}
            title="Men's branded relaxed Jeans"
            image="https://m.media-amazon.com/images/I/41QFLArTr+L.__AC_SY200_.jpg"
            price={20.5}
            rating={4}
          />
        </div>

        {/* Row 3 */}

        <div className="home__row">
          <Product
            id={34398}
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 16GB Dual-Channel..."
            image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UL320_.jpg"
            price={1171}
            rating={5}
          />
          <Product
            id={120973}
            title="Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H, NVIDIA GeForce GTX 1650 Ti, 8GB DDR4, 256GB NVMe SSD..."
            image="https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_UL320_.jpg"
            price={788}
            rating={4}
          />
          <Product
            id={232341}
            title="ASUS TUF Gaming A15 Gaming Laptop, 15.6” 144Hz Full HD IPS-Type Display, AMD Ryzen 5 4600H, GeForce GTX 1650, 8GB..."
            image="https://m.media-amazon.com/images/I/A1A2yQlAXCL._AC_UL320_.jpg"
            price={879}
            rating={5}
          />
        </div>

        {/* row 4 */}

        <div className="home__row">
          <Product
            id={34345}
            title="Samsung Galaxy Tab S7+ Wi-Fi, Mystic Black - 256 GB..."
            image="https://m.media-amazon.com/images/I/71rw+F2aLHL._AC_UL320_.jpg"
            price={779}
            rating={5}
          />
          <Product
            id={123456}
            title="Lenovo Tab M10 Plus, 10.3 FHD Android Tablet, Octa-Core Processor, 32GB Storage, 2GB RAM, Iron Grey, ZA5T0263US..."
            image="https://m.media-amazon.com/images/I/71sfODG+c+L._AC_UL320_.jpg"
            price={149}
            rating={4}
          />
          <Product
            id={23419}
            title="SAMSUNG Galaxy Tab A- 10.1 64GB, Wifi Tablet- SM-T510NZDFXAR Black"
            image="https://m.media-amazon.com/images/I/61ndwk9f8DL._AC_UL320_.jpg"
            price={247}
            rating={5}
          />
        </div>

        {/*......................................  */}

        <div className="home__row">
          <Product
            id={343208}
            title="Wrangler Authentics Men’s Sweater Fleece Quarter-Zip"
            image="https://m.media-amazon.com/images/I/91kETW2guKL._AC_UL320_.jpg"
            price={22}
            rating={5}
          />
          <Product
            id={90312}
            title="Amazon Essentials Men's Long-Sleeve Regular-fit Casual Poplin Shirt"
            image="https://m.media-amazon.com/images/I/A1QFGLRQgOL._AC_UL320_.jpg"
            price={18}
            rating={4}
          />
          <Product
            id={290012}
            title="Goodthreads Men's Slim-Fit Long-Sleeve Plaid Poplin Shirt"
            image="https://m.media-amazon.com/images/I/91BMeDMRqpL._AC_UL320_.jpg"
            price={25}
            rating={4}
          />
        </div>

        {/* row 4 */}

        <div className="home__row">
          <Product
            id={311223}
            title="NIKE Men's Kobe Mamba Instinct Basketball Shoes"
            image="https://m.media-amazon.com/images/I/71yDOgbdIzL._AC_UL320_.jpg"
            price={98.4}
            rating={4}
          />
          <Product
            id={125552}
            title="Nike Pg 3 Tb Paul George Basketball Shoes Mens Cn9512-402"
            image="https://m.media-amazon.com/images/I/71jhyOfkSCL._AC_UL320_.jpg"
            price={240.5}
            rating={4}
          />
          <Product
            id={23412}
            title="Nike Men's Epic React Flyknit 2 Running Shoe White/Lime Blast/White 8 M US"
            image="https://m.media-amazon.com/images/I/61o2TS6FPlL._AC_UL320_.jpg"
            price={155}
            rating={5}
          />
        </div>

        {/* row 5 */}

        <div className="home__row">
          <Product
            is={55543}
            title="Home & Decor"
            image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            price={39.9}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_conatiner">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt="home_background"
        />

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
            title="Dell Inspiron 7580 Core i5 8th Gen 15.6-inch FHD Laptop (8GB/1TB + 128GB SSD/Windows 10 + MS Office/2GB Graphics/Silver)"
            image="https://m.media-amazon.com/images/I/7189nNwXCyL._AC_UY218_.jpg"
            price={1000.5}
            rating={5}
          />
        </div>

        {/* row 2 */}

        <div className="home__row">
          <Product
            id={34343}
            title="pTron Bassbuds in-Ear True Wireless Bluetooth 5.0 Headphones with Hi-Fi Deep Bass, 20Hrs Playtime with Case, Ergonomic Sweatproof Earbuds, Noise Isolation, Voice Assistance & Built-in Mic - (Black)"
            image="https://m.media-amazon.com/images/I/41ImsZy3u5L.__AC_SY200_.jpg"
            price={98.4}
            rating={4}
          />
          <Product
            id={12312}
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
            image="https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg"
            price={40.5}
            rating={4}
          />
          <Product
            id={23412}
            title="Men's branded relaxed Jeans"
            image="https://m.media-amazon.com/images/I/41QFLArTr+L.__AC_SY200_.jpg"
            price={20.5}
            rating={4}
          />
        </div>

        {/* row 3 */}

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

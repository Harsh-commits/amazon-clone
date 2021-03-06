import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const customEnterAnimation = {
    from: { transform: "scale(0.5, 1)" },
    to: { transform: "scale(1, 1)" },
  };

  return (
    <div className="checkout__div">
      <p style={{ fontWeight: "700", fontSize: "14px" }}>
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "#b22222" }}>with Amazon Pay balance</span>
      </p>
      <p style={{ marginBottom: "22px" }}>
        Get Instant refund on cancellations | Zero payment failures
      </p>
      <div className="checkout">
        <div className="checkout__left">
          <div className="">
            <h3>{!user ? "" : user.email}</h3>
            <h2 className="checkout__title">Shopping Cart </h2>

            {/* <FlipMove
              duration={500}
              delay={10}
              easing={"cubic-bezier(0.25, 0.5, 0.75, 1)"}
              staggerDurationBy={30}
              staggerDelayBy={10}
              enterAnimation={customEnterAnimation}
              enterAnimation="accordianVertical"
              leaveAnimation="accordianVertical"
            > */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                {...item}
              />
            ))}
            {/* </FlipMove> */}
          </div>
        </div>

        <div className="checkout__right">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt="ad_banner"
          />
          <Subtotal />
        </div>
      </div>
    </div>
  );
}
export default Checkout;

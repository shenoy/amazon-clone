import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i0.wp.com/www.heyuguys.com/images/2014/02/Disney-Movies-Anywhere.jpg?fit=1265%2C582&ssl=1"
          alt="home"
        />

        <div className="home__row">
          {/*  */}
          <Product
            id="234512"
            title="The midnight library"
            price={11.89}
            image="https://images-na.ssl-images-amazon.com/images/I/41eHhySW8NL._SX354_BO1,204,203,200_.jpg"
            rating={5}
          />
          {/*  */}
          <Product
            id="347234"
            title="STAR-LINK Waterproof Wireless 2.4G Numeric Keypad,Portable Small Bluetooth Number Pad 19 Keys Keyboard with Mini USB Receiver for Laptop Desktop Computer PC Notebook Financial Accounting"
            price={8.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51mF095e6PL._AC_SL1003_.jpg"
            rating={4}
          />

          {/*  */}
          <Product
            id="789234"
            title="Dungeons & Dragons Essentials Kit"
            price={16.6}
            image="https://images-na.ssl-images-amazon.com/images/I/71A9ZM66i5L._AC_SL1288_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          {/*  */}
          <Product
            id="356753"
            title="Personalised Cushion Cover Printed Photo Gift Custom Made Large 37cm Print (16 in x 16 in) Pet, Dog, Cat"
            price={7.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81io-fHP9DL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="456243"
            title="Edinburgh Gin Raspberry Flavoured Gin 70 cl"
            price={24.43}
            image="https://images-na.ssl-images-amazon.com/images/I/71vi0OIuoLL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="902345"
            title="Lamicall Adjustable Phone Stand - Foldable Phone Holder Desk Stand, Dock, Cradle Compatible with iPhone 12 Mini, 12 Pro Max, 11 Pro Xs Max XR X 8 7 6S Plus, Samsung S10 S9 S8, All 4-8 in Phones - Black"
            price={8.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61mNs7Hpj1L._AC_SL1500_.jpg"
            rating={5}
          />
          {/*  */}
          {/*  */}
        </div>
        <div className="home__row">
          {/*  */}
          <Product
            id="451256"
            title="Wildlife World Solitary Bee Hive"
            price={24.45}
            image="https://images-na.ssl-images-amazon.com/images/I/81tw37agnXL._AC_SL1500_.jpg"
            rating={5}
          />
          <div className="home__row">
            {/*  */}
            <Product
              id="654432"
              title="Posture Corrector for Men and Women, Upper Back Brace for Clavicle Support, Adjustable Back Straightener and Providing Pain Relief from Neck, Back & Shoulder, (Universal) (Regular) (Regular)"
              price={15.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71iGFlK3n7L._SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            {/*  */}
            <Product
              id="890643"
              title="Ferrero Collection Chocolate Gift Set, Assorted Dark, Milk, Chocolate and Coconut and Almond, Box of 48 Pieces"
              price={12.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81quh-hn0nL._AC_SL1500_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

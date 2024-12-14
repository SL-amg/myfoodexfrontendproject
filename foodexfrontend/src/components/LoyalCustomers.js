import React from "react";
import "../components/CSS files/LoyalCustomers.css";

const Moudhi =
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_13_6e214d489a.jpg&w=1920&q=75";
const Omar =
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_5_bdb6d0aeb8.jpg&w=1920&q=75";
const Abdullah =
  "https://home.joincoded.com/_next/image?url=https%3A%2F%2Flanding-storage.fra1.digitaloceanspaces.com%2FFrame_4_a0dd99bc67.jpg&w=1920&q=75";

const LoyalCustomers = () => {
  return (
    <>
      <div className="MianDivLoyal">
        <div className="enteryBar">
          <p className="LoyaltextBar">Our Loyal</p>
          <h1 className="ballet-font-Loyal"> Partners</h1>
        </div>

        <div className="LoyalCustomerCard">
          <div>
            <img className="LoyalUserImage" src={Moudhi} alt="My Image" />
            <h3>Moudhi Al Bannai</h3>
          </div>
          <p className="LoyalReview">
            If you’re like me and barely have the time to think of new meal
            ideas, Ma8adeer is a lifesaver. This site offers a fantastic range
            of easy, quick, and creative recipes that take the guesswork out of
            daily cooking. I love how you can filter by the ingredients you
            already have, and within minutes, you’ve got dinner sorted. The
            clear step-by-step instructions, prep times, and helpful tips make
            the whole process stress-free, even on the busiest days. No more
            staring at my fridge in frustration! If you’re looking to simplify
            meal planning without sacrificing flavor, this site is a must-visit.
          </p>
        </div>

        <div className="LoyalCustomerCard">
          <div>
            <img className="LoyalUserImage" src={Omar} alt="My Image" />
            <h3>Omar ALIbrahim</h3>
          </div>
          <p className="LoyalReview">
            I don’t have the time (or patience) to come up with new recipes
            every day, but this site makes it ridiculously easy. The recipes are
            straightforward, quick to make, and packed with flavor. I especially
            love the filtering options—you can just plug in what ingredients you
            have, and boom, you’ve got a meal idea ready. The instructions are
            clear, and even if you’re not a pro in the kitchen, you’ll be able
            to whip up something that tastes like you are. This site takes the
            thinking out of meal planning, and honestly, it’s been a game
            changer for me. Highly recommend it for anyone who wants great food
            without the hassle!
          </p>
        </div>

        <div className="LoyalCustomerCard">
          <div>
            <img className="LoyalUserImage" src={Abdullah} alt="My Image" />
            <h3>Abdullah Hussinan</h3>
          </div>
          <p className="LoyalReview">
            Ma8aDeer has been a total game changer for me. I used to rely on
            daily takeout because I didn’t know what to cook, and honestly, it
            was draining my wallet. Now, I just hop on Ma8adeer, and in minutes,
            I’ve got a recipe idea that’s easy, quick, and way more affordable
            than ordering out. The recipes are simple to follow, and they don’t
            require a ton of ingredients or time. Plus, I feel good knowing I’m
            eating healthier and saving money at the same time. If you’re
            looking to break the takeout habit and want something practical and
            tasty, Ma8adeer is the way to go!
          </p>
        </div>
      </div>
    </>
  );
};

export default LoyalCustomers;

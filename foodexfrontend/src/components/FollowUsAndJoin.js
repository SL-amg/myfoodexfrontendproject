import React from "react";
import "../components/CSS files/FollowUsAndJoin.css";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'

const FollowUsAndJoin = () => {
  return (
    <>
      <div className="followusDivmain">
        <div className="socialMediaDiv">
          <h3 className="playwrite-cz-Follow">Follow Us</h3>
          <Link to="https://x.com/joincoded">
          <RiTwitterXFill className="socialMediaIcons" />
          </Link>
          <Link to="https://www.instagram.com/joincoded/?hl=en">
          <FaInstagram className="socialMediaIcons" />
          </Link>
          <Link to="https://www.facebook.com/joincoded/">
          <FaFacebookSquare className="socialMediaIcons" />
          </Link>
        </div>

        <div className="mainSubscribeDiv">
          <h2 className="ballet-fontSub"> Subscribe for Updates</h2>
          <div class="input-group">
            <input
              type="email"
              class="input"
              id="Email"
              name="Email"
              placeholder="Email Address"
              autocomplete="off"
            />
            <input class="button--submit" value="Subscribe" type="submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUsAndJoin;

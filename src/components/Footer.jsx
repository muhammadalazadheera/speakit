import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="bg-base-200 border-t border-(--secondary-color)">
      <div className="w-[95%] lg:w-[85%] mx-auto">
        <div className="w-full h-[250px] flex flex-col md:flex-row justify-between items-center">
          <div className="text-center pt-5 md:pt-0">
            <h1 className="logo-text text-3xl font-extrabold">SpeakIt</h1>
            <p className="text-xl font-light text-(--primary-color) capitalize">
              Learn. Live. Thrive.
            </p>
          </div>
          <div className="my-7 md:my-0">
            <ul className="uppercase text-(--primary-color) text-center md:text-left text-lg font-light">
              <li><Link to="/privacy-policy">privacy policy</Link></li>
              <li><Link to="/terms-and-condition">terms and condition</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <ul>
              <li><a target="_blank" href="https://www.facebook.com/muhammadalazadheera"><img src="https://img.icons8.com/nolan/64/facebook-new.png" alt="facebook" /></a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/muhammadalazadheera/"><img src="https://img.icons8.com/nolan/64/linkedin.png" alt="youtube" /></a></li>
              <li><a target="_blank" href="https://github.com/muhammadalazadheera"><img src="https://img.icons8.com/nolan/64/github.png" alt="youtube" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
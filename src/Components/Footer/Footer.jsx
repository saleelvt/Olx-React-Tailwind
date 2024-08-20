import React from "react";
import FooterColumn from "./FooterColumn";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="bg-gray-300 md:h-60 mt-10 p-20 md:flex justify-between md:px-32">
        <FooterColumn values={['Kolkata','Mumbai','Chennai','Pune']} title={'POPULAR LOCATIONS'}/>
        <FooterColumn values={['Bhubhaneshwar','Hyderabad','Chandigarh','Nashik']} title={'TRENDING LOCATIONS'}/>
        <FooterColumn values={['Contact Us','','','']} title={'ABOUT US'}/>
        <FooterColumn values={['Help','Sitemap','Legal & Privacy information','Valnerability Disclosure Program']} title={'OLX'}/>
        <FooterColumn values={[<FaFacebookF className="text-2xl" />,<FaInstagram className="text-2xl"  />,<FaTwitter className="text-2xl"  />,<FaRegCirclePlay className="text-2xl"  />]} title={'FOLLOW US'}/>
      </div>
      
    </div>
  );
}

export default Footer;

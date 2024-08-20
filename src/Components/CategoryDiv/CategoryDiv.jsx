import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CategoryDiv = () => {
    let [dropDownActive, setDropDownActive] = useState(false);

    const toggleDropDownActive = () => {
        setDropDownActive(!dropDownActive);
      };

  return (
    <div
      className="flex items-center font-bold cursor-pointer relative"
      onClick={() => toggleDropDownActive()}
    >
      <p className="uppercase">All Categories</p>
      {dropDownActive ? (
        <FiChevronUp className="text-2xl" />
      ) : (
        <FiChevronDown className="text-2xl" />
      )}
      {dropDownActive && (
        <div
          className="absolute top-12 z-10 grid grid-cols-4 bg-white shadow-xl pb-10 px-5 font-normal text-slate-600"
          style={{ width: "1390px" }}
        >
          <ul className="">
            <li className="category-title">OLX Autos (Cars)</li>
            <li className="category-title">Properties</li>
            <li className="category-li ">For Sale: Houses & Apartments</li>
            <li className="category-li ">For Rent: Houses & Apartments</li>
            <li className="category-li ">Lands & Plots</li>
            <li className="category-li ">For Rent: Shops & Offices</li>
            <li className="category-li ">For Sale: Shops & Offices</li>
            <li className="category-li ">PG & Guest Houses</li>
            <li className="category-title">Mobiles</li>
            <li className="category-li ">Mobile Phones</li>
            <li className="category-li ">Accessories</li>
            <li className="category-li ">Tablets</li>
          </ul>
          <ul>
            <li className="category-title">Jobs</li>
            <li className="category-li ">Data entry & Back office</li>
            <li className="category-li ">Sales & Marketing</li>
            <li className="category-li ">BPO & Telecaller</li>
            <li className="category-li ">Office Assistant</li>
            <li className="category-li ">Delivery & Collection</li>
            <li className="category-li ">Teacher</li>
            <li className="category-li ">Receptionist & Front office</li>
            <li className="category-li ">Operator & Technician</li>
            <li className="category-li ">IT Engineer & Developer</li>
            <li className="category-li ">Hotel & Travel Executive</li>
            <li className="category-li ">Accountant</li>
            <li className="category-li ">Designer</li>
            <li className="category-li ">Other Jobs</li>
            <li className="category-title">Bikes</li>
            <li className="category-li ">Motorcycles</li>
            <li className="category-li ">Scooters</li>
            <li className="category-li ">Spare Parts</li>
            <li className="category-li ">Bicycles</li>
          </ul>
          <ul>
            <li className="category-title">Electronics & Appliances</li>
            <li className="category-li ">TVs, Video - Audio</li>
            <li className="category-li ">Kitchen & Other Appliances</li>
            <li className="category-li ">Computers & Laptops</li>
            <li className="category-li ">Cameras & Lenses</li>
            <li className="category-li ">Games & Entertainment</li>
            <li className="category-li ">Fridges</li>
            <li className="category-li ">Computer Accessories</li>
            <li className="category-li ">Hard Disks, Printers & Monitors</li>
            <li className="category-li ">ACs</li>
            <li className="category-li ">Washing Machines</li>
            <li className="category-title">Commercial Vehicles & Spares</li>
            <li className="category-li ">Commercial & Other Vehicles</li>
            <li className="category-li ">Spare Parts</li>
            <li className="category-title">Furniture</li>
            <li className="category-li ">Sofa & Dining</li>
            <li className="category-li ">Beds & Wardrobes</li>
            <li className="category-li ">Home Decor & Garden</li>
            <li className="category-li ">Kids Furniture</li>
            <li className="category-li ">Other Household Items</li>
            <li className="category-title">Fashion</li>
            <li className="category-li ">Men</li>
            <li className="category-li ">Women</li>
            <li className="category-li ">Kids</li>
          </ul>
          <ul>
            <li className="category-title">Books, Sports & Hobbies</li>
            <li className="category-li ">Books</li>
            <li className="category-li ">Gym & Fitness</li>
            <li className="category-li ">Musical Instruments</li>
            <li className="category-li ">Sports Equipment</li>
            <li className="category-li ">Other Hobbies</li>
            <li className="category-title">Pets</li>
            <li className="category-li ">Fishes & Aquarium</li>
            <li className="category-li ">Pet Food & Accessories</li>
            <li className="category-li ">Dogs</li>
            <li className="category-li ">Other Pets</li>
            <li className="category-title">Services</li>
            <li className="category-li ">Education & Classes</li>
            <li className="category-li ">Tours & Travel</li>
            <li className="category-li ">Electronics Repair & Services</li>
            <li className="category-li ">Health & Beauty</li>
            <li className="category-li ">Home Renovation & Repair</li>
            <li className="category-li ">Cleaning & Pest Control</li>
            <li className="category-li ">Legal & Documentation Services</li>
            <li className="category-li ">Packers & Movers</li>
            <li className="category-li ">Other Services</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default CategoryDiv
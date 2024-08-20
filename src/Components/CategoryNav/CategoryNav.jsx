import React from "react";
import CategoryDiv from "../CategoryDiv/CategoryDiv";

const CategoryNav = () => {
  return (
    <div className="text-sm flex gap-5 shadow py-1 pl-16 items-center">
        <CategoryDiv/>
      <a href="/" className="category-li">
        Cars
      </a>
      <a href="/" className="category-li">
        Motorcycles
      </a>
      <a href="/" className="category-li">
        Mobile Phones
      </a>
      <a href="/" className="category-li">
        For Sale: Houses & Apartments
      </a>
      <a href="/" className="category-li">
        Scooters
      </a>
      <a href="/" className="category-li">
        Commercial & Other Vehicles
      </a>
      <a href="/" className="category-li">
        For Rent: Houses & Apartments
      </a>
    </div>
  );
};

export default CategoryNav;

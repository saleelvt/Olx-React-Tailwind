import React from "react";
import { BiHeart } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";
import classNames from 'classnames';
import { BsFillLightningFill } from "react-icons/bs"; 

function Card({ data, isFeatured }) {
    // console.log(data);

    const cardClasses = classNames('p-3', {
        'border-yellow-300 border-l-4': isFeatured,
    });

    return (
        <div className="lg:w-1/4 pr-5 mb-3 relative ">
            <div className="border border-gray-200 bg-white shadow-2xl hover:shadow-orange-100 rounded cursor-pointer ">
                <div className="absolute top-1 left-0 h-5 w-[35%] bg-yellow-400 text-xs text-gray-600 flex items-center justify-center gap-2 rounded">
                      <BsFillLightningFill className="text-black" />
                      featured
                    </div>
                <div className="h-52 overflow-hidden p-3">
                    <img src={data.imageUrl} alt="asdfa" className="mx-auto" />
                </div>
                <div className={cardClasses}>
                    <h2 className="font-bold text-xl">₹ {data.price}</h2>
                    <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {data.name}
                    </h3>
                    <p className="text-sm text-gray-500  whitespace-nowrap overflow-hidden text-ellipsis">
                        {data.category}
                    </p>
                </div>
                <div className="bg-white w-fit p-2 rounded-full absolute top-3 right-8 shadow-md ">
                    <BiHeart className="text-2xl" />
                </div>
                {isFeatured && (
                    <div className="absolute top-3 left-2 flex items-center bg-yellow-300 text-sm w-fit rounded px-2 gap-1">
                        <HiLightningBolt />
                        Featured
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
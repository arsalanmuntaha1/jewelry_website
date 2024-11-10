import React from 'react';
import { Heart, Search, ShoppingCart, UserRound } from 'lucide-react';
import Image from 'next/image';

function Header() {
    return (
        <div className="flex justify-around bg-[#A29875] h-[135.01px] items-center">
            <div className="">
                <Image src={'./logo.svg'} width={242.56} height={87.45} alt="logo" />
            </div>
            <div className="flex  h-fit">
                <div className="bg-white flex items-center rounded-[13.83px] pr-3">
                    <input
                        type="text"
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
                        className="text-[#6C757D] bg-transparent pl-[26.73] size-[18.68px] w-[769.89px] py-7 "
                    />
                    <Search className="" />
                </div>
            </div>
            <div className="flex text-white gap-[38.7px] text-center">
                <Heart className="size-8" />
                <UserRound className="size-8" />
                <ShoppingCart className="size-8" />
            </div>
        </div>
    );
}

export default Header;

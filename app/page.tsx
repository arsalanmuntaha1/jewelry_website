import Image from 'next/image';
import Header from '@/components/header';
import { libreBodoni } from './lib/fonts';

export default function Home() {
    return (
        <div>
            <div className="flex justify-center items-center mt-[165.97px]">
                <div className="">
                    <h1
                        className={`${libreBodoni.className} h-[162.53px] w-[472.97px] leading-[62.24px] text-[37.84px] font-bold mb-[60.2px]`}
                    >
                        IMPECCABLE CRAFTSMANSHIP AND FINESSE
                    </h1>
                    <p
                        className={`${libreBodoni.className} w-[798.9px] h-[144px] mb-[42.61px] font-medium leading-[48.1px] text-[29.24px] text-[#787054]`}
                    >
                        An example of intricate workmanship and detail, elegant necklaces and long
                        and short chains form a part of our desirable collection.
                    </p>
                    <button
                        className={`${libreBodoni.className} text-white bg-[#A29875] font-medium px-6 p-[8.6px] text-[25.8px] rounded-[8.6px]`}
                    >
                        Explore Now
                    </button>
                </div>
                <div>
                    <div>
                        <Image
                            src={'/hero_image.png'}
                            width={421.38}
                            height={573.59}
                            alt="heroSectionImage"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

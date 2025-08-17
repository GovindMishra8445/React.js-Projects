import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const NewsCard = ({ title, newsList }) => {
    const isSchoolToppers = title === "School Toppers";

    return (
        <div className="w-full p-4 overflow-hidden bg-white rounded-md shadow-lg text-primary shadow-slate-400 md:w-1/3">
            <div className="flex items-center justify-between pb-2 border-b">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            {isSchoolToppers ? (
                <div className="relative p-4 mt-2 border-2 border-gray-400 border-dashed">
                    <Swiper
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        className="w-full"
                    >
                        {newsList.map((topper, index) => (
                            <SwiperSlide key={index} className="text-center">
                                <h3 className="text-xl italic font-semibold">🎉 Congratulations</h3>
                                <p className="mt-2 font-medium">{topper.name}</p>
                                <p className="text-sm">{topper.relation}</p>
                                <p className="text-lg font-bold">{topper.percentage}%</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="relative h-32 mt-2 overflow-hidden">
                    <div className="flex flex-col space-y-2 animate-scroll">
                        {newsList.map((news, index) => (
                            <div key={index} className="whitespace-nowrap">
                                <span className="font-semibold">{news.date} - </span>
                                {news.text}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(NewsCard);

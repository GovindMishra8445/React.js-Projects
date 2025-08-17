import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Layout from "../Components/Layout";

const alumniData = [
    {
        name: "Rajat Bhatt",
        position: "Professor",
        description:
            "Rajat Bhatt from batch 2015 - 2018 [B.Com] and from Batch 2018-2020 [M.Com] from PBS College Banka is now serving as Professor in the state university in Bihar.",
        image: "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4",
    },
];

export default function AlumniSlider() {
    return (
        <Layout>
            <section className="container px-6 py-10 mx-auto">
                <h2 className="mb-6 text-xl font-bold text-primary">VIPS GODDA Alumni</h2>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    className="w-full"
                >
                    {alumniData.map((alumni, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center p-6 space-y-4 border border-gray-300 rounded-lg shadow-lg md:space-y-0 shadow-slate-400 md:flex-row md:min-h-80">


                                <div className="flex items-center justify-center flex-shrink-0 w-1/2 h-full">
                                    <img
                                        src={alumni.image}
                                        alt={alumni.name}
                                        className="object-cover w-48 h-48 border-2 border-gray-300 rounded-full"
                                    />
                                </div>

                                <div className="flex-1 h-full p-6 ml-6 bg-gray-100 rounded-lg">
                                    <h3 className="text-lg font-bold text-gray-900">{alumni.name}</h3>
                                    <p className="text-sm text-gray-500">{alumni.position}</p>
                                    <p className="mt-2 text-gray-700">{alumni.description}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </Layout>
    );
}

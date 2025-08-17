import React, { useState } from "react";

const BoxCard = ({ title, image, description }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="w-full p-4 text-white rounded-md shadow-lg bg-primary shadow-slate-400 md:w-1/3">
            <h2 className="pb-2 text-lg font-semibold border-b">{title}</h2>

            <div className="relative w-full h-56 mt-2">
                {loading && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                )}

                <img
                    src={image}
                    alt={title}
                    className={`object-cover w-full h-full transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
                        }`}
                    loading="lazy"
                    onLoad={() => setLoading(false)}
                />
            </div>

            <p className="mt-2 text-sm italic">{description}</p>
        </div>
    );
};

export default BoxCard;

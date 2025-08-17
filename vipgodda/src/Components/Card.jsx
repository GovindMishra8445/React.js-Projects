import React from "react";

const Card = ({ image }) => {
    console.log(image)
    return (
        <div className="flex flex-col items-center md:w-[25%] w-[90%] h-64 bg-white rounded-lg shadow-md">
            <img src={image} className="object-cover w-full h-64 rounded-md" />
        </div>
    );
};

export default Card;

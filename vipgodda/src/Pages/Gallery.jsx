import React from "react";
import Card from "../Components/Card";
import Layout from "../Components/Layout";
import fest1 from "../../src/assets/fest1.jpg";
import fest2 from "../../src/assets/fest2.jpg";
import fest3 from "../../src/assets/fest3.jpg";
import republic from "../../src/assets/republic.jpg";

const Gallery = () => {

    const eventImages = {
        "Campus": [
            fest1,
            fest2,
            fest3
        ],
        "Republic Day": [
            "https://images.unsplash.com/photo-1585802540432-60662b65ca62",
             republic,
            "https://images.unsplash.com/photo-1649008726820-d90aeb70c32e"
        ],
    };

    return (
        <Layout>

            <h2 className="p-4 text-2xl font-bold text-left text-primary">VIPS GODDA Gallery</h2>

            {Object.keys(eventImages).map((event, index) => (
                <div key={index} className="w-full my-6 text-center">

                    <h2 className="py-2 text-xl font-bold text-white bg-primary">{event}</h2>

                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        {eventImages[event].map((image, imgIndex) => (
                            
                            <Card key={imgIndex} image={image} 
                              
                            />
                        ))}
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default Gallery;

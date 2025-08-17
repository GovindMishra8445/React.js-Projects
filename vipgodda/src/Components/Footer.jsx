import React, { memo, useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

function Footer() {
    const [loading, setLoading] = useState(true);

    return (
        <footer className="py-8 text-white bg-primary">
            <div className="container px-6 mx-auto lg:px-16">
                <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
                    <div className="flex flex-col items-center md:items-start">
                        {loading && (
                            <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                        )}

                        <img
                            src={logo}
                            alt="School Logo"
                            className={`w-56 h-auto transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
                                }`}
                            onLoad={() => setLoading(false)}
                            loading="lazy"
                        />

                    </div>

                    <div>
                        <h3 className="pb-2 mb-3 text-lg font-semibold border-b border-white">About VIPS GODDA</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "About", path: "/about" },
                                { name: "Academics", path: "/academics" },
                                { name: "Admission", path: "/admission" },
                                { name: "Gallery", path: "/gallery" },
                                { name: "Contact Us", path: "/contact" },
                                { name: "Alumni", path: "/alumni" },
                            ].map((item, index) => (
                                <Link to={item.path} key={index} className="flex items-center space-x-2">
                                    <span className="text-blue-300">◆</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="pb-2 mb-3 text-lg font-semibold border-b border-white">Location</h3>
                        <p>
                            Nahar Chowk Rd,
                            Rajkumar Nagar, Adarsh vihar, <br />
                            Fasia Dangal, Godda, <br />
                            Jharkhand - 814133
                        </p>
                    </div>

                    <div>
                        <h3 className="pb-2 mb-3 text-lg font-semibold border-b border-white">Get in Touch</h3>
                        <p className="flex items-center space-x-2">
                            <FaEnvelope className="text-blue-300" />
                            <a href="mailto:Info@vipgodda.com">Info@vipgodda.com</a>
                        </p>
                        <p className="flex items-center mt-2 space-x-2">
                            <FaPhoneAlt className="text-blue-300" />
                            <a href="tel:+919771495106">+91 9771495106</a>
                        </p>
                    </div>
                </div>

                <div className="pt-4 mt-6 text-sm text-center border-t border-white">
                    VIP School | All Rights Reserved | © 2025
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
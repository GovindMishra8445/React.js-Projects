import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

export default function MarqueeBanner() {
    return (
        <div className="bg-[#0a77d3] text-white py-2 overflow-hidden">
            <div className="flex items-center space-x-10 animate-marquee">
                <span className="flex items-center font-semibold">
                    <FaGraduationCap className="mr-2" /> Admission Open Now
                </span>
                <span className="flex items-center space-x-1 font-semibold">
                    <FiPhoneCall className="mr-2" /> Contact us: <a href="tel:+919771495106">+91 9771495106</a>
                </span>
                <span className="flex items-center space-x-1 font-semibold">
                    <MdEmail className="mr-2" /> Email us: <a href="mailto:Info@vipgodda.com">Info@vipgodda.com</a>
                </span>
                <span className="flex items-center font-semibold">
                    <FaGraduationCap className="mr-2" /> Admission Open Now
                </span>
            </div>
        </div>
    );
}

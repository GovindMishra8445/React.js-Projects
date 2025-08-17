import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Layout from "../Components/Layout";

const Contact = () => {
    return (
        <Layout>
            <div className="flex flex-col px-12 py-6">
                <h2 className="text-3xl font-bold text-left text-primary">Contact VIPS GODDA</h2>

                <div className="flex items-center gap-2 mt-8">
                    <AiOutlineMail className="text-lg text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Get in Touch</h3>
                </div>

                <div className="w-full max-w-5xl p-6 mx-auto mt-4 bg-white rounded-lg shadow-lg shadow-slate-400">
                    <form className="space-y-4">
                        <div>
                            <label className="block font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Mobile Number</label>
                            <input
                                type="tel"
                                placeholder="Your Mobile Number"
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-2 font-semibold text-white rounded-lg bg-primary hover:bg-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="max-w-3xl mt-10">
                    <h2 className="flex items-center mb-4 text-2xl font-bold">
                        <AiOutlineEnvironment className="mr-2 text-gray-700" /> Location
                    </h2>
                    <div className="p-6 bg-white border rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <AiOutlineEnvironment className="text-primary" />
                            <span>
                                Nahar Chowk Rd,
                                Rajkumar Nagar, Adarsh vihar,
                                Fasia Dangal, Godda,
                                Jharkhand - 814133
                            </span>
                        </div>
                        <div className="flex items-center mt-1 space-x-2 text-gray-700">
                            <AiOutlinePhone className="text-primary" />
                            <a href="tel:+919771495106">+91 9771495106</a>
                        </div>
                        <div className="mt-4">
                            <a
                                href="https://www.google.com/maps/place/VIP+School,+Nahar+Chowk,+Godda/@24.8186122,87.2110854,17z/data=!3m1!4b1!4m6!3m5!1s0x39f0f599cffa691d:0x303525ea7eb6c23a!8m2!3d24.8186122!4d87.2110854!16s%2Fg%2F11g0srqt2j?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                                className="flex items-center text-primary hover:underline"
                            >
                                <AiOutlineEnvironment className="mr-2 text-primary" /> Get Directions
                            </a>
                        </div>
                        <div className="mt-3 font-bold text-gray-800">
                            School Timings:{" "}
                            <span className="font-normal text-gray-600">
                                7:55 a.m. to 2:30 p.m.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

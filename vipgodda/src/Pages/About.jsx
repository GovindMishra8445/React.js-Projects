import React from "react";
import logo from "../assets/logo.jpg";
import Layout from "../Components/Layout";

export default function About() {
    return (
        <Layout>
            <section className="container px-6 py-10">
                <h2 className="mb-6 text-2xl font-bold text-primary">About School</h2>
                <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img
                        src={logo}
                        alt="School Logo"
                        className="w-full  mb-6  md:w-1/4 shadow-slate-400 md:mb-0 md:mr-6"
                    />
                    <div className="text-justify text-gray-700 md:w-2/3">
                        <p className="mb-4">

                            A shining pool of budding talents, passions, opportunities, and
                            achievements, VIP School, Nahar Chowk Rd, Godda, is a grooming
                            ground for hundreds of children who dare to dream. The school is
                            committed to nurturing students' cognitive, mental, spiritual,
                            social, aesthetic, and cultural faculties, shaping them into
                            responsible global citizens and compassionate human beings.

                        </p>
                        <p className="mb-4">
                            Established with a vision to provide quality education, VIP School
                            stands as a beacon of knowledge and growth in the region. The
                            institution fosters a conducive learning environment where
                            students are encouraged to explore, evolve, and excel under the
                            able guidance of dedicated faculty members.
                        </p>
                        <p>
                            Living by strong moral values, treasuring our rich cultural
                            heritage, and simultaneously preparing for the challenges of
                            today’s fast-paced, competitive world is a daunting task. With its
                            focused approach, VIP School, Godda, strives to strike a balance
                            in meeting the diverse needs of students. The dedication of the
                            faculty, the disciplined spirit of the students, and the
                            unwavering support of the management contribute to the school's
                            relentless pursuit of excellence.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

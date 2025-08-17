import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Layout from "../Components/Layout";

const academicsList = [
    "Smart classes for better learning and understanding.",
    "Understanding based education.",
    "Individual attention to students in class.",
    "Fear free close liaison between teachers and students.",
    "Two big Computer Labs equipped with fifty computers to make students technology savvy.",
    "Expressional skills through Group Discussions and other communicative skills.",
    "Comprehensive assessment and evaluation system.",
    "A team of well educated fully devoted and well experienced teachers who provide the students a homely atmosphere.",
    "Large playground.",
    "Pollution Free Environment."
];

export default function Academics() {
    return (
        <Layout>
            <section className="container px-6 py-10 mx-auto">
                <div className="mb-6">
                    <img
                        src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
                        alt="Students in School"
                        className="object-cover w-full rounded-lg shadow-lg shadow-slate-400"
                    />
                </div>

                <h2 className="pb-2 mb-4 text-xl font-bold border-b-2 text-primary">
                    About Academics
                </h2>

                <ul className="space-y-2 text-gray-700">
                    {academicsList.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <FaCheckCircle className="mt-1 text-primary" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

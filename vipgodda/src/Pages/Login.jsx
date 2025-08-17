import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

export default function LoginSection() {
    return (
        <Layout>
            <section className="container px-6 py-10 mx-auto">
                <h2 className="mb-4 text-xl font-bold text-primary">
                    Login to your account
                </h2>

                <div className="flex justify-between px-4 py-10 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-400 border-dashed rounded-lg md:text-lg">
                    <Link to={'/student/login'} className="flex-1 text-center hover:text-primary">
                        Student Login
                    </Link>
                    <Link to={'/teacher/login'} className="flex-1 text-center hover:text-primary">
                        Teacher Login
                    </Link>
                    <Link to={'/admin/login'} className="flex-1 text-center hover:text-primary">
                        Admin Login
                    </Link>
                </div>
            </section>
        </Layout>
    );
}

import BoxCard from "../Components/BoxCard";
import NewsCard from "../Components/NewsCard";
import Banner from "../Components/Banner";
import MarqueeBanner from "../Components/MarqueeBanner";
import Layout from "../Components/Layout";
import principalImg from "../../src/assets/principal.jpg";
import classroomImg from '../../src/assets/classroom.jpg';
import sports from "../../src/assets/sports3.jpg";
import event from "../../src/assets/event3.jpg";

export default function Home() {

    const schoolToppers = [
        { name: "Gareema Kumari", relation: "d/o Mr. Santosh Kumari", percentage: "90.6" },
        { name: "Rohit Sharma", relation: "s/o Mr. Raj Sharma", percentage: "91.2" },
        { name: "Priya Verma", relation: "d/o Mrs. Sunita Verma", percentage: "89.8" },
    ];

    const newsData = [
        { date: "2025-01-05", text: "Notice regarding (APAAR ID) Released for 2nd semester 2023-27 Batch, B.A, B.Com, B.Sc." },
        { date: "2024-12-23", text: "Notice regarding (DigiLocker) Released for 2nd semester 2023-27 Batch." },
        { date: "2025-01-08", text: "Notice regarding (75% ATTENDANCE) Released for 3rd semester 2023-27 Batch." }
    ];

    return (
        <Layout>
            <Banner />
            <MarqueeBanner />
            <div className="flex flex-col gap-4 p-4 md:flex-row">
                <BoxCard
                    title="The Principal Speaks"
                    image={principalImg}
                    description="At VIP School, we believe that education is the foundation of a brighter future. Our dedicated faculty strives to instill not only knowledge but also discipline, curiosity, and resilience in our students. Together, we aim to create an environment where every child can dream, achieve, and inspire."
                />

                <NewsCard title="Latest News" newsList={newsData} />

                <BoxCard
                    title="Our Mission"
                    image={classroomImg}
                    description="At VIP School, our mission is to nurture and empower students with quality education, strong moral values, and a thirst for knowledge. We are committed to fostering a holistic learning environment that encourages creativity, critical thinking, and leadership skills, preparing students for a successful future."
                />
            </div>
            <div className="flex flex-col gap-4 p-4 md:flex-row">
                <BoxCard
                    title="Our Vision"
                    image={sports}
                    description="VIP School envisions creating a generation of confident, responsible, and compassionate individuals who contribute positively to society. Our goal is to blend academic excellence with ethical values, equipping students with the skills and mindset to excel in a rapidly changing world."
                />

                <NewsCard title="School Toppers" newsList={schoolToppers} />

                <BoxCard
                    title="Our Philosophy"
                    image={event}
                    description="VIP School is dedicated to fostering a nurturing and dynamic learning environment where students are encouraged to explore, grow, and achieve their full potential. Our philosophy is rooted in academic excellence, strong moral values, and holistic development, preparing students to face the challenges of a rapidly evolving world."
                />
            </div>
        </Layout>
    );
}

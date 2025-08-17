import React from "react";

const blogs = [
	{
		img: "https://waffy-demo.myshopify.com/cdn/shop/files/category1_360x.jpg?v=1614285053",
		title: "Beware of Fake Sellers: Buy Vantara Only from Verified Partners",
		excerpt:
			"We urge our valued customers to purchase Vantara dry fruits, spices, and pulses only through trusted and verified sources…",
		link: "#",
	},
	{
		img: "https://waffy-demo.myshopify.com/cdn/shop/files/category2_360x.jpg?v=1614285053",
		title: "Top 10 Vantara Gift Hampers for Raksha Bandhan 2025",
		excerpt:
			"Celebrate this Rakhi with Vantara’s exclusive dry fruit and spice gift boxes — a blend of taste and tradition. Surprise your …",
		link: "#",
	},
	{
		img: "https://waffy-demo.myshopify.com/cdn/shop/files/category3_360x.jpg?v=1614285053",
		title: "Healthy Gifting: Why Choose Vantara This Festive Season",
		excerpt:
			"With increasing awareness towards health, Vantara’s gift hampers offer a wholesome and nutritious option this festive season…",
		link: "#",
	},
];

export default function NewsTipsUpdates() {
	return (
		<section
			className="py-12"
			style={{ background: "#a05a1c" }}
		>
			<div className="container mx-auto px-4">
				<h2
					className="md:text-5xl text-2xl font-bold md:text-center mb-12"
					style={{
						color: "#f3cfa2",
						fontFamily: "serif",
						lineHeight: 1.1,
					}}
				>
					News, Tips & Updates
				</h2>
				<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
					{blogs.map((blog, idx) => (
						<div
							key={idx}
							className="bg-white rounded-2xl flex flex-col items-start w-full md:w-1/3 transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
							style={{
								minWidth: 340,
								maxWidth: 420,
								boxShadow: "0 0 0 rgba(0,0,0,0)",
							}}
						>
							<img
								src={blog.img}
								alt={blog.title}
								className="w-full h-64 object-cover rounded-t-2xl"
								style={{ minHeight: 256, maxHeight: 256 }}
							/>
							<div className="p-8 flex flex-col flex-1 w-full">
								<h4 className="text-xl font-bold mb-3 text-[#7a1c1c] text-left" style={{ fontFamily: "Quicksand, Arial, serif" }}>
									{blog.title}
								</h4>
								<p className="text-gray-700 mb-6 text-left">{blog.excerpt}</p>
								<a
									href={blog.link}
									className="bg-[#a05a1c] text-white px-6 py-2 rounded-full font-medium transition hover:bg-[#7a1c1c] self-start"
									style={{ fontFamily: "Quicksand, Arial, serif" }}
								>
									Read more
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
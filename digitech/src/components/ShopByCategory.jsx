import React from "react";

const categories = [
	{
		name: "Dry Fruit & Nuts",
		img: "/nuts.png",
		alt: "Dry Fruit & Nuts",
	},
	{
		name: "Spices",
		img: "/masala2.jpg",
		alt: "Spices",
	},
	{
		name: "Pulses",
		img: "/masala.jpg",
		alt: "Pulses",
	},
];

export default function ShopByCategory() {
	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]">
					Shop By Category
				</h2>
				<div className="flex flex-col md:flex-row gap-8  justify-center items-center">
					{categories.map((cat, idx) => (
						<div
							key={idx}
							className="flex flex-col mt-3 hover:mt-0 duration-500 items-center group transition-all "
						>
							<img
								src={cat.img}
								alt={cat.alt}
								className="w-90 h-64 object-cover rounded-xl shadow-md transition-all duration-300  group-hover:shadow-xl"
							/>
							<h3 className="mt-4 md:text-2xl font-normal text-[#8B0000] text-center">
								{cat.name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";

const dryFruits = [
	{
		name: "CASHEWS",
		img: "/cate-1.png",
		bg: "#8B2C2B",
	},
	{
		name: "PISTACHIOS",
		img: "/cate-2.png",
		bg: "#b86d3c",
	},
	{
		name: "RAISINS",
		img: "/cate-3.png",
		bg: "#2c4d4d",
	},
	{
		name: "WALNUTS",
		img: "/cate-4.png",
		bg: "#a97b50",
	},
	{
		name: "DATES",
		img: "/cate-5.png",
		bg: "#8B2C2B",
	},
	{
		name: "FIGS",
		img: "/cate-6.png",
		bg: "#a89c5c",
	},
	{
		name: "FIGS",
		img: "/cate-7.png",
		bg: "#a89c5c",
	},
	{
		name: "FIGS",
		img: "/cate-8.png",
		bg: "#a89c5c",

	},
	{
		name: "FIGS",
		img: "/cate-9.png",
		bg: "#a89c5c",
	},{
		name: "FIGS",
		img: "/cate-10.png",
		bg: "#a89c5c",
	},
];

export default function PremiumDryFruitCollection() {
	const scrollRef = useRef(null);

	const scroll = (dir) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: dir === "left" ? -270 : 270,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="py-12" style={{ background: "#edc89c" }}>
			<div className="container mx-auto px-4">
				{/* Heading and Nav Buttons */}
				<div className="relative flex justify-center items-center mb-10">
					<h2 className="md:text-5xl text-2xl font-toto font-bold md:text-center mb-8 text-[#8B0000]">
						Explore Our Premium Dry Fruit Collection
					</h2>
					<div className="absolute right-8 top-12 flex gap-4">
						<button
							onClick={() => scroll("left")}
							className="w-12 h-12 rounded-full cursor-pointer bg-[#a97b50] flex items-center justify-center text-white text-xl shadow hover:bg-[#8B0000] transition"
							aria-label="Scroll Left"
							type="button"
						>
							<ArrowLeft />
						</button>
						<button
							onClick={() => scroll("right")}
							className="w-12 h-12 rounded-full cursor-pointer bg-[#a97b50] hover:bg-[] flex items-center justify-center text-white text-xl shadow hover:bg-[#8B0000] transition"
							aria-label="Scroll Right"
							type="button"
						>
							<ArrowRight />
						</button>
					</div>
				</div>
				{/* Slider */}
				<div
					ref={scrollRef}
					className="flex gap-4 overflow-x-auto scroll pb-4 scrollbar-hide"
					style={{
						scrollBehavior: "smooth",
						WebkitOverflowScrolling: "touch",
					}}
				>
					{dryFruits.map((fruit, idx) => (
						<div
							key={idx}
							className="flex-shrink-0 w-[173.5px] h-60 rounded-xl  "
						
						>
							{/* Vantara logo (oval border) */}
							{/* <div className="w-full flex flex-col items-center">
								<span
									className="text-white text-2xl font-serif px-6 py-1 mb-2"
									style={{
										border: "2px solid #fff",
										borderRadius: "999px",
										display: "inline-block",
										width: "100%",
										textAlign: "center",
									}}
								>
									Vantara
								</span>
								<span className="text-white text-lg tracking-widest font-semibold mb-4">
									{fruit.name}
								</span>
							</div> */}
							<img
								src={fruit.img}
								alt={fruit.name}
								className="object-contain w-full h-auto	 mx-auto"
								draggable={false}
								style={{ marginTop: "auto" }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
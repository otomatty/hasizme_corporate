interface HeroProps {
	title: string;
	backgroundImage?: string;
}

const Hero = ({ title, backgroundImage }: HeroProps) => {
	return (
		<div
			className={`relative w-full h-[30vh] overflow-hidden flex items-center justify-center font-bold ${
				backgroundImage ? "" : "bg-gray-50"
			}`}
		>
			{backgroundImage && (
				<>
					<img
						src={backgroundImage}
						alt={title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/40" />
				</>
			)}
			<h1
				className={`text-5xl text-center z-10 ${
					backgroundImage
						? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
						: "text-primary"
				}`}
			>
				{title}
			</h1>
		</div>
	);
};

export default Hero;

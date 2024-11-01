import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls, type PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CSRActivity {
	id: string;
	title: string;
	thumbnail: string;
}

interface CSRSliderProps {
	activities: CSRActivity[];
}

const CSRSlider = ({ activities }: CSRSliderProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [width, setWidth] = useState(0);
	const [maxSlides, setMaxSlides] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const carousel = useRef<HTMLDivElement>(null);
	const controls = useAnimationControls();
	const autoPlayInterval = 5000; // 5秒ごとにスライド
	const progressControls = useAnimationControls();

	useEffect(() => {
		if (carousel.current) {
			const containerWidth = carousel.current.offsetWidth;
			const slideWidth = 308;
			const visibleSlides = Math.floor(containerWidth / slideWidth);
			setMaxSlides(activities.length - visibleSlides);
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, [activities.length]);

	// 自動スライド用のuseEffect
	useEffect(() => {
		if (isPaused) {
			progressControls.stop(); // アニメーションを停止
			return;
		}

		const startProgress = async () => {
			await progressControls.start({
				width: "100%",
				transition: {
					duration: autoPlayInterval / 1000, // ミリ秒を秒に変換
					ease: "linear",
				},
			});
		};

		progressControls.set({ width: "0%" }); // プログレスをリセット
		startProgress();

		const autoPlayTimer = setInterval(() => {
			const nextIndex = currentIndex >= maxSlides ? 0 : currentIndex + 1;
			setCurrentIndex(nextIndex);
			controls.start({
				x: -nextIndex * 308,
				transition: {
					type: "spring",
					damping: 30,
					stiffness: 200,
				},
			});
			// 次のスライドに移動したらプログレスをリセットして再開
			progressControls.set({ width: "0%" });
			startProgress();
		}, autoPlayInterval);

		return () => {
			clearInterval(autoPlayTimer);
			progressControls.stop();
		};
	}, [currentIndex, maxSlides, controls, isPaused, progressControls]);

	const handleSlide = (direction: "prev" | "next") => {
		setIsPaused(true); // ユーザーが操作したら一時停止

		const newIndex =
			direction === "next"
				? Math.min(maxSlides, currentIndex + 1)
				: Math.max(0, currentIndex - 1);

		setCurrentIndex(newIndex);
		controls.start({
			x: -newIndex * 308,
			transition: {
				type: "spring",
				damping: 30,
				stiffness: 200,
			},
		});
	};

	const handleDragEnd = (
		_: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		setIsPaused(true);

		const velocity = info.velocity.x;
		if (Math.abs(velocity) > 500) {
			const direction = velocity > 0 ? -1 : 1;
			const newIndex = Math.max(
				0,
				Math.min(maxSlides, currentIndex + direction),
			);
			setCurrentIndex(newIndex);
			controls.start({
				x: -newIndex * 308,
				transition: {
					type: "spring",
					damping: 30,
					stiffness: 200,
				},
			});
		}
	};

	return (
		<div
			className="relative w-full"
			onMouseEnter={() => setIsPaused(true)} // マウスが乗ったら一時停止
			onMouseLeave={() => setIsPaused(false)} // マウスが離れたら再開
			onTouchStart={() => setIsPaused(true)} // タッチ開始時に一時停止
			onTouchEnd={() => setIsPaused(false)} // タッチ終了時に再開
		>
			<motion.div ref={carousel} className="overflow-hidden w-full py-8  pl-16">
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					dragElastic={0.1}
					onDragEnd={handleDragEnd}
					animate={controls}
					className={cn("flex gap-8 w-fit", "relative")}
				>
					{activities.map((activity, index) => (
						<motion.div
							key={`${activity.id}-${index}`}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						>
							<Link to={`/csr/${activity.id}`} className="no-underline">
								<div
									className={cn(
										"flex-none bg-white rounded-xl shadow-md overflow-hidden",
										"flex flex-col",
										"w-[300px] h-[400px]",
										"md:w-[250px] md:h-[350px]",
										"sm:w-[200px] sm:h-[300px]",
									)}
								>
									<img
										src={activity.thumbnail}
										alt={activity.title}
										className="w-full h-[70%] object-cover"
									/>
									<h3
										className={cn(
											"text-xl md:text-lg sm:text-base text-center text-gray-800",
											"m-4 flex-grow flex items-center justify-center",
										)}
									>
										{activity.title}
									</h3>
								</div>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			<button
				type="button"
				onClick={() => handleSlide("prev")}
				className={cn(
					"absolute left-4 top-1/2 -translate-y-1/2",
					"bg-white/80 hover:bg-white",
					"rounded-full p-2 shadow-md",
					"transition-all duration-200",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					"z-10",
				)}
				disabled={currentIndex === 0}
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				type="button"
				onClick={() => handleSlide("next")}
				className={cn(
					"absolute right-4 top-1/2 -translate-y-1/2",
					"bg-white/80 hover:bg-white",
					"rounded-full p-2 shadow-md",
					"transition-all duration-200",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					"z-10",
				)}
				disabled={currentIndex >= maxSlides}
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			<div className="flex items-center justify-center gap-2 mt-6">
				<button
					type="button"
					onClick={() => setIsPaused(!isPaused)}
					className={cn(
						"bg-primary hover:bg-primary/80",
						"text-white",
						"rounded-full p-2 shadow-md",
						"transition-all duration-200",
						"flex items-center justify-center",
						"w-8 h-8",
					)}
					aria-label={
						isPaused ? "スライドショーを再生" : "スライドショーを一時停止"
					}
				>
					{isPaused ? (
						<svg
							className="w-4 h-4"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M8 5v14l11-7z" />
						</svg>
					) : (
						<svg
							className="w-4 h-4"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
						</svg>
					)}
				</button>

				<div className="flex items-center gap-1">
					{activities.slice(0, maxSlides + 1).map((activity) => {
						const isActive =
							currentIndex ===
							activities.findIndex((a) => a.id === activity.id);
						return (
							<button
								key={activity.id}
								type="button"
								onClick={() => {
									const index = activities.findIndex(
										(a) => a.id === activity.id,
									);
									if (index <= maxSlides) {
										setCurrentIndex(index);
										setIsPaused(true);
										controls.start({
											x: -index * 308,
											transition: {
												type: "spring",
												damping: 30,
												stiffness: 200,
											},
										});
									}
								}}
								className={cn(
									"transition-all duration-300",
									"hover:bg-primary/80",
									"rounded-full",
									"relative",
									isActive ? "w-12 h-4" : "w-4 h-4",
								)}
								aria-label={`${activity.title}のスライドへ移動`}
							>
								<div
									className={cn("absolute inset-0 rounded-full", "bg-gray-300")}
								/>

								{isActive && !isPaused && (
									<motion.div
										animate={progressControls}
										initial={{ width: "0%" }}
										className={cn(
											"absolute inset-0 rounded-full",
											"bg-primary origin-left",
										)}
									/>
								)}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CSRSlider;

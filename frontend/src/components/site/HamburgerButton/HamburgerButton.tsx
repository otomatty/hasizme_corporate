import { cn } from "@/lib/utils";

interface HamburgerButtonProps {
	onClick: () => void;
}

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"flex flex-col items-center justify-center bg-transparent border-none cursor-pointer p-2.5 text-primary",
				// モバイルファースト（375px以上）のスタイル
				"min-[375px]:w-24 min-[375px]:h-24 min-[375px]:bg-primary min-[375px]:rounded-bl-full min-[375px]:absolute min-[375px]:top-0 min-[375px]:right-[-0.25rem] min-[375px]:z-[1001] min-[375px]:text-white",
				// タブレット（768px以上）のスタイル
				"md:w-28 md:h-28 md:right-[-0.5rem]",
				// ラップトップ（992px以上）のスタイル
				"lg:right-[-0.75rem]",
				// デスクトップ（1200px以上）のスタイル
				"xl:hidden",
			)}
		>
			<div className="flex flex-col items-center justify-center">
				{[1, 2, 3].map((i) => (
					<span
						key={i}
						className={cn(
							"block bg-primary w-8 h-1 rounded my-1 transition-all duration-300",
							"min-[375px]:w-10 min-[375px]:h-1.5 min-[375px]:bg-white",
						)}
					/>
				))}
			</div>
			<p className="mt-1 mb-0 text-sm font-bold min-[375px]:text-base">
				メニュー
			</p>
		</button>
	);
};

export default HamburgerButton;

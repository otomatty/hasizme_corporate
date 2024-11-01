import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="w-10/12 px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1600px] mx-auto box-border">
			{children}
		</div>
	);
};

export default Container;

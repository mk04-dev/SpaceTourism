import React from "react";
import { ITechnology } from "../utils";
import { useMediaQuery } from "react-responsive";

interface Props {
	tech: ITechnology;
	technologies: ITechnology[];
	setTech: React.Dispatch<React.SetStateAction<ITechnology>>;
}
function Technology(props: Props) {
	const { tech, technologies, setTech } = props;
	const { name, description, images } = tech;
	const isTablet = useMediaQuery({ query: "(max-width: 940px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

	return (
		<div className="flex flex-col w-full py-12 px-36 tablet:px-12 max-tablet:pt-8 max-tablet:px-0 max-md:py-16 ">
			<div className="flex gap-4 font-barlow-condensed text-desktop-5 max-tablet:px-4 max-tablet:text-tablet-5 max-md:text-mobile-6 max-md:justify-center">
				<h3 className="text-white/25 font-bold">03</h3>
				<h3>SPACE LAUNCH 101</h3>
			</div>
			<div className="flex flex-1 gap-8 max-tablet:flex-col-reverse max-md:pt-16">
				<div className="flex flex-[3] gap-12 max-tablet:flex-1 max-tablet:flex-col max-tablet:items-center">
					<div className="flex tablet:flex-col justify-center gap-8">
						{technologies.map((e, idx) => (
							<div
								className={`flex items-center justify-center bg-transparent text-white rounded-full\
                                    border cursor-pointer border-white/25 hover:border-white\
									w-20 h-20  max-tablet:w-14 max-tablet:h-14 max-md:w-10 max-md:h-10\
									text-desktop-4 max-tablet:text-tablet-4 max-md:text-mobile-4\
                                    aria-checked:bg-white aria-checked:text-black`}
								aria-checked={e.name === tech.name}
								onClick={() => setTech(e)}
							>
								<span>{idx + 1}</span>
							</div>
						))}
					</div>
					<div className="flex flex-col justify-center gap-6 max-tablet:text-center max-tablet:px-20 max-md:px-4">
						<div className="grid">
							<span className="text-white/50 text-desktop-4 tablet:text-tablet-4 max-md:text-mobile-4">THE TERMINOLOGY…</span>
							<span className="uppercase text-desktop-3 tablet:text-tablet-3 max-md:text-mobile-3 text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
						</div>
						<p className="text-secondary text-desktop-9 max-tablet:text-tablet-9 max-md:text-mobile-9">{description}</p>
					</div>
				</div>
				<div className="grid items-center justify-end flex-[2] max-tablet:flex-1 max-md:flex-[0]">
					<img className="object-contain h-full w-full" src={isTablet ? images.landscape : images.portrait} alt="lauch-img" />
				</div>
				{/* <div
					className="flex justify-end flex-[2] bg-no-repeat bg-cover bg-center max-tablet:flex-1 "
					style={{ backgroundImage: `url(${isTablet ? images.landscape : images.portrait})` }}
				/> */}
			</div>
		</div>
	);
}

export default React.memo(Technology);

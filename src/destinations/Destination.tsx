import React from "react";
import { DestinationType, IDestination, DestinationEnum } from "../utils";

interface Props {
	destination: IDestination;
	changeDestination: (name: DestinationType) => void;
}
function Destination(props: Props) {
	const { destination, changeDestination } = props;
	const { name, description, distance, travel, images } = destination;
	return (
		<div className="flex flex-col py-12 px-36 w-full gap-8 max-tablet:px-4 max-md:py-20">
			<div className="flex gap-4 font-barlow-condensed text-desktop-5 max-md:text-mobile-6 max-md:justify-center">
				<h3 className="text-white/25 font-bold">01</h3>
				<h3>PICK YOUR DESTINATION</h3>
			</div>
			<div className="flex p-4 flex-1 gap-8 max-tablet:flex-col max-tablet:items-center max-tablet:text-center">
				<div className="flex justify-center items-center w-1/2">
					<img src={images.webp}></img>
				</div>
				<div className="flex flex-col w-1/4 min-w-[32vw] gap-8 max-tablet:w-10/12">
					<div className="flex gap-4 text-secondary max-tablet:justify-center text-desktop-7 max-tablet:text-desktop-8 max-md:text-mobile-8">
						{Object.keys(DestinationEnum).map((item) => (
							<span
								onClick={() => changeDestination(item as DestinationType)}
								className={`uppercase py-2 tab-item ${name === item ? "active" : ""}`}
							>
								{item}
							</span>
						))}
					</div>
					<span className="text-desktop-2 uppercase max-tablet:text-tablet-2 max-md:text-mobile-2">{name}</span>
					<p className="font-barlow text-secondary text-desktop-9 max-tablet:text-tablet-9 max-md:text-mobile-9">{description}</p>
					<hr className="border-gray-400"></hr>
					<div className="flex gap-16 max-md:flex-col max-md:gap-8">
						<div className="flex flex-col flex-1">
							<span className="font-barlow-condensed text-secondary text-desktop-7">AVG. DISTANCE</span>
							<span className="text-desktop-6 uppercase">{distance}</span>
						</div>
						<div className="flex flex-col flex-1">
							<span className="font-barlow-condensed text-secondary text-desktop-7">
								EST. TRAVEL TIME
							</span>
							<span className="text-desktop-6 uppercase">{travel}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Destination);

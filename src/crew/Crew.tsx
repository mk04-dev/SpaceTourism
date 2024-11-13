import React, { useCallback, useEffect, useRef, useState } from "react";
import { ICrew } from "../utils";
import "./style.css";
interface Coords {
	start: number;
	scrollLeft: number;
}

interface Props {
	crews: ICrew[];
	crew: ICrew;
	setCrew: React.Dispatch<React.SetStateAction<ICrew>>;
}
function Crew(props: Props) {
	const { crews, crew, setCrew } = props;
	const ref = useRef(null);
	const [dragging, setDragging] = useState<boolean>(false);
	const [coords, setCoords] = useState<Coords>({ start: 0, scrollLeft: 0 });
	const [activeIdx, setActiveIdx] = useState<number>(crews.findIndex((e) => e.name === crew.name));

	const scrollIntoView = useCallback((activeIdx: number) => {
		document.getElementById(`crew-item-${activeIdx}`)?.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		setCrew(crews[activeIdx]);
		scrollIntoView(activeIdx);
	}, [activeIdx]);

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!ref || !ref.current) return;
		const node = ref.current as HTMLElement;
		setDragging(true);
		setCoords({ start: e.pageX - node.offsetLeft, scrollLeft: node.scrollLeft });
	};

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!dragging || !ref || !ref.current) return;
		const node = ref.current as HTMLElement;
		const x = e.pageX - node.offsetLeft;
		node.scrollLeft = coords.scrollLeft + coords.start - x;
	};

	const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setDragging(false);
		if (!ref || !ref.current) return;
		const node = ref.current as HTMLElement;
		const x = e.pageX - node.offsetLeft;

		const move = coords.start - x;
		const ratio = move / node.clientWidth;
		if (ratio > 0 && activeIdx < crews.length - 1) {
			setActiveIdx(activeIdx + 1);
		} else if (ratio < 0 && activeIdx) {
			setActiveIdx(activeIdx - 1);
		} else {
			scrollIntoView(activeIdx);
		}
	};

	const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (dragging) {
			onMouseUp(e);
		}
	};
	return (
		<div className="flex flex-col w-full py-12 max-tablet:pt-8 max-tablet:pb-0 max-md:py-16 ">
			<div className="flex gap-4 font-barlow-condensed text-desktop-5 px-36 max-tablet:px-4 max-tablet:text-tablet-5 max-md:text-mobile-6 max-md:justify-center">
				<h3 className="text-white/25 font-bold">02</h3>
				<h3>MEET YOUR CREW</h3>
			</div>
			<div className="flex-1 flex max-tablet:pt-8 max-md:pt-16">
				<div className="relative w-full h-full">
					<div className="absolute flex gap-3 bottom-20 left-1/4 z-10 max-tablet:bottom-1/2 max-tablet:left-8 max-tablet:flex-col max-tablet:gap-6 max-md:bottom-1/4">
						{Array(crews.length)
							.fill(0)
							.map((e, idx) => (
								<div
									onClick={() => setActiveIdx(idx)}
									className={`w-4 h-4 rounded-full cursor-pointer hover:bg-gray-300/70 max-tablet:md:w-6 max-tablet:md:h-6 ${
										activeIdx === idx ? "bg-white" : "bg-gray-300/20"
									}`}
								/>
							))}
					</div>
					<div
						ref={ref}
						className="flex absolute overflow-hidden inset-0"
						onMouseDown={onMouseDown}
						onMouseMove={onMouseMove}
						onMouseUp={onMouseUp}
						onMouseLeave={onMouseLeave}
					>
						{crews.map((crew, idx) => (
							<div
								key={idx}
								id={`crew-item-${idx}`}
								className="crew-item relative flex shrink-0 grow-0 basis-full items-center justify-center gap-16 select-none max-tablet:flex-col max-tablet:gap-0 max-tablet:justify-start"
							>
								<div className="crew-introduce flex flex-col flex-1 gap-4 pl-36 max-tablet:pl-4 max-tablet:items-center max-tablet:w-8/12 max-md:w-full max-md:px-6">
									<span className="text-desktop-4 opacity-50 uppercase max-tablet:text-tablet-4 max-md:text-mobile-4">
										{crew.role}
									</span>
									<span className="text-desktop-3 uppercase max-tablet:text-tablet-3 max-md:text-mobile-3">
										{crew.name}
									</span>
									<span className="text-desktop-9 text-secondary max-tablet:text-center max-tablet:text-tablet-9 max-tablet:text-mobile-9">
										{crew.bio}
									</span>
								</div>
								<div className="flex justify-center flex-1 h-full max-tablet:justify-end">
									<img
										src={crew.images.webp}
										className="crew-image max-tablet:h-6/6 "
										draggable={false}
									></img>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Crew);

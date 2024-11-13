import { Component, useEffect, useMemo, useState } from "react";
import "./App.css";
import Home from "./home/Home";
import { useMediaQuery } from "react-responsive";
import Destination from "./destinations/Destination";
import { Data, DestinationType, ICrew, IDestination, ITechnology } from "./utils";
import Crew from "./crew/Crew";
import Technology from "./technology/Technology";

const data: Data = require("./data.json");

function App() {
	const { destinations, crew: crews, technology: technologies } = data;
	const isTablet = useMediaQuery({ query: "(max-width: 940px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
	const [activeMenu, setActiveMenu] = useState<number>(0);
	const [destination, setDestination] = useState<IDestination>(destinations[0]);
	const [crew, setCrew] = useState<ICrew>(crews[0]);
	const [tech, setTech] = useState<ITechnology>(technologies[0]);
	const [expanded, setExpanded] = useState<boolean>(false);

	const onSetActiveMenu = (idx: number) => {
		setActiveMenu(idx);
		setExpanded(false);
	};

	const changeDestination = (name: DestinationType) => {
		const des = destinations.find((e) => e.name === name);
		des && setDestination(des);
	};

	const nextMenu = () => {
		onSetActiveMenu(activeMenu + 1);
	};

	const prevMenu = () => {
		onSetActiveMenu(activeMenu - 1);
	};

	const MENU = [
		{
			id: "00",
			title: "HOME",
			component: <Home nextMenu={nextMenu} />,
		},
		{
			id: "01",
			title: "DESTINATION",
			component: <Destination destination={destination} changeDestination={changeDestination} />,
		},
		{
			id: "02",
			title: "CREW",
			component: <Crew crews={crews} crew={crew} setCrew={setCrew} />,
		},
		{
			id: "03",
			title: "TECHNOLOGY",
			component: <Technology technologies={technologies} tech={tech} setTech={setTech}/>,
		},
	];

	const page = useMemo(() => MENU[activeMenu].title.toLocaleLowerCase(), [activeMenu, MENU]);
	const device = useMemo(() => (isMobile ? "mobile" : isTablet ? "tablet" : "desktop"), [isMobile, isTablet]);
	return (
		<div
			className="app"
			style={{
				backgroundImage: `url('${page}/background-${page}-${device}.jpg')`,
			}}
		>
			<div className="app-header">
				<div className="app-logo-wrapper px-12">
					<div className="app-logo" />
				</div>
				{isMobile && (
					<img
						className="menu-icon"
						src={expanded ? "shared/icon-close.svg" : "shared/icon-hamburger.svg"}
						alt="app-logo"
						onClick={() => setExpanded(!expanded)}
					></img>
				)}
				<div className={`app-menu ${expanded ? "expanded" : ""}`}>
					{MENU.map((e, idx) => (
						<div
							className={`app-menu-item tab-item ${idx === activeMenu ? "active" : ""}`}
							onClick={() => onSetActiveMenu(idx)}
						>
							<span>{e.id}</span>
							<span className="text-secondary">{e.title}</span>
						</div>
					))}
				</div>
			</div>
			<div className="app-body">{MENU[activeMenu].component}</div>
		</div>
	);
}

export default App;

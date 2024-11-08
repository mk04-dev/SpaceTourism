import { useState } from "react";
import "./App.css";
import Home from "./home/Home";
import logo from "assets/shared/logo.svg";
import close from "assets/shared/icon-close.svg";
import hamburger from "assets/shared/icon-hamburger.svg";
import { useMediaQuery } from "react-responsive";

const MENU = [
	{
		id: "00",
		title: "HOME",
		component: <Home />,
	},
	{
		id: "01",
		title: "DESTINATION",
	},
	{
		id: "02",
		title: "CREW",
	},
	{
		id: "03",
		title: "TECHNOLOGY",
	},
];
function App() {
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
	const [activeMenu, setActiveMenu] = useState<number>(0);
	const [expanded, setExpanded] = useState<boolean>(false);
	
	const onSetActiveMenu = (idx: number) => {
		setActiveMenu(idx);
		setExpanded(false);
	}
	return (
		<div className="app">
			<div className="app-header">
				<div className="app-logo-wrapper">
					<img className="app-logo" src={logo} alt="app-logo"></img>
				</div>
				{isMobile && <img
					className="menu-icon"
					src={expanded ? close : hamburger}
					alt="app-logo"
					onClick={() => setExpanded(!expanded)}
				></img>}
				<div className={`app-menu ${expanded ? "expanded" : ""}`}>
					{MENU.map((e, idx) => (
						<div
							className={`app-menu-item ${idx === activeMenu ? "active" : ""}`}
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

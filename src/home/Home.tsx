import React from "react";
import "./style.css";
function Home() {
	return (
		<div className="home">
			<div>
				<div className="home-content">
					<span className="text-secondary">SO, YOU WANT TO TRAVEL TO</span>
					<span>SPACE</span>
					<span className="text-secondary">
						Let's face it; if you want to go to space, you might as well genuinely go to outer space and not
						hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of
						this world experience!
					</span>
				</div>
			</div>
			<div>
				<div className="btn-explore">
					<span>EXPLORE</span>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Home);

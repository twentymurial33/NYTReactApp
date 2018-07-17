import React from "react";

const main= props => (
		<div>
			<div>
				<div>
					<p>Main.js Rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	)


  export default main;

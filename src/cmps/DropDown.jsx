import React, { useState } from 'react'

import { ReactComponent as Arrow } from '../assets/img/arrow.svg';


export const DropDown = () => {
	const [open, setOpen] = useState(true);


	const toggleHandler = () => {
		setOpen(!open)
	}


	return (
		<div>

			<div className="drawer rb">
				<p>Details</p>
				{(open ? <div onClick={toggleHandler} className="rotate-90"><Arrow /></div> :
					<div onClick={toggleHandler} className="rotate-0" ><Arrow /></div>)}
			</div>
			<div>

				{(open ?

					null


					:
					<div>




						The results are in, and the verdict? Remote is here to stay. Thanks to a global pandemic companies have had to reevaluate the power of distributed workforces and we’ve put together all the reasons why going remote is the right move to make. In this infographics, you’ll see:
						<ul>
							<li>How remote work broadens the talent pool</li>
							<li>The productivity results behind distributed teams</li>
							<li>An increase in diversity as a result of remote recruitment</li>
							<li>Money saved on operational costs and salary negotiations</li>
						</ul>
						What better time to refresh your strategy than on the brink of a whole new world? Dig into this list of recruiting methodologies and adjust your sails for the future!

					</div>
				)}

			</div>


		</div>
	)
}

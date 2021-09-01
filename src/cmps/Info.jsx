import React, { useState } from 'react'

export const Info = () => {
	const [open, setOpen] = useState(true);

	const toggleHandler = () => {
		setOpen(!open)
	}

	return (
		<div>
			<div>

				{(open ?

					<div>
						<div onClick={toggleHandler} ><i className="far fa-question-circle fa-3x"></i></div>
					</div>
					:
					<div className="rb">
						<div className="qmark-contain">
							<div onClick={toggleHandler} ><i className="far fa-question-circle fa-2x"></i></div>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At ver
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

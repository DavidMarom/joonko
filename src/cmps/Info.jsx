import React, { useState } from 'react'

export const Info = () => {
	const [open, setOpen] = useState(true);

	const toggleHandler = () => {
		setOpen(!open)
	}


	return (
		<div>
			{/* <div className="rb">
				{(open ? <div onClick={toggleHandler} >aaaa</div> :
					<div onClick={toggleHandler} ><Qmark /></div>)}
			</div> */}
			<div>

				{(open ?

					<div>
						<div onClick={toggleHandler} ><i className="far fa-question-circle fa-3x"></i></div>


					</div>

					:
					<div className="rb">
						<div>
						<div onClick={toggleHandler} ><i className="far fa-question-circle fa-3x"></i></div>

						</div>
						<div>

						<p>bdsfgdgfsgfsfdgsdfgsfd</p>
						<p>bdsfgdgfsgfsfdgsdfgsfd</p>
						<p>bdsfgdgfsgfsfdgsdfgsfd</p>
						<p>bdsfgdgfsgfsfdgsdfgsfd</p>
						</div>

					</div>
				)}

			</div>


		</div>
	)
}

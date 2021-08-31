import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName, loadDB } from '../store/actions/userActions'

const _Contact = () => {
	const dispatch = useDispatch()

	useEffect(() => { dispatch(loadDB()) }, [dispatch]);


	return (
		<div className="contact-container">
			<div className="contact-left">
				<h1>
					The Future of Work in the now: Why you should Become Remote-ready
				</h1>
				<h2>
					Infographic
				</h2>

				<p>
					The results are in, and the verdict? Remote is here to stay. Thanks to a global pandemic companies have had to reevaluate the power of distributed workforces and we’ve put together all the reasons why going remote is the right move to make. In this infographics, you’ll see:
					<ul>

						<li>How remote work broadens the talent pool</li>
						<li>The productivity results behind distributed teams</li>
						<li>An increase in diversity as a result of remote recruitment</li>
						<li>Money saved on operational costs and salary negotiations</li>
					</ul>

					What better time to refresh your strategy than on the brink of a whole new world? Dig into this list of recruiting methodologies and adjust your sails for the future!
				</p>



			</div>
			<div className="contact-right">right</div>
		</div>
	)
}
export const Contact = _Contact

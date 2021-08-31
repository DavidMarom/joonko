import React, { useState } from 'react'
import {productService} from '../services/productService'

const _Contact = () => {
	// const dispatch = useDispatch()

	const [name_err, setName_err] = useState('');
	const [company_err, setComp_err] = useState('');
	const [phone_err, setPhone_err] = useState('');
	const [email_err, setEmail_err] = useState('');


	const doSend = async ev => {
		ev.preventDefault();
		let valid = true;

		if (!(/^[a-z ,.'-]+$/i.test(ev.target.name.value))) {
			setName_err('Invalid, please try again'); valid = false
		} else { setName_err('') }

		if (!(/^[a-z ,.'-]+$/i.test(ev.target.company.value))) {
			setComp_err('Invalid, please try again'); valid = false
		} else { setComp_err('') }

		if (!(/^[0-9]+$/i.test(ev.target.phone.value))) {
			setPhone_err('Invalid, please try again'); valid = false
		} else { setPhone_err('') }

		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ev.target.email.value))) {
			setEmail_err('Invalid, please try again'); valid = false
		} else { setEmail_err('') }

		if (valid) {
			
			let link = productService.getProducts(1)
			
			link.then((res,rej)=>{
				window.open(res.link, '_blank').focus();
			})
		}
		


	};

	return (
		<div className="contact-container">
			<div className="contact-left">
				<h1>
					The Future of Work in the now: Why you should Become Remote-ready
				</h1>
				<h2>
					Infographic
				</h2>

				The results are in, and the verdict? Remote is here to stay. Thanks to a global pandemic companies have had to reevaluate the power of distributed workforces and we’ve put together all the reasons why going remote is the right move to make. In this infographics, you’ll see:
				<ul>
					<li>How remote work broadens the talent pool</li>
					<li>The productivity results behind distributed teams</li>
					<li>An increase in diversity as a result of remote recruitment</li>
					<li>Money saved on operational costs and salary negotiations</li>
				</ul>
				What better time to refresh your strategy than on the brink of a whole new world? Dig into this list of recruiting methodologies and adjust your sails for the future!

			</div>
			<div className="contact-right">

				<h3>Want to get the full version?</h3>
				<h4>Fill in the form below:</h4>

				<form onSubmit={doSend}>
					<div className="input-container">
						<input name="name" type="text" placeholder="Full Name" />
						<div className="err-msg">{name_err}</div>
					</div>

					<div className="input-container">
						<input name="company" type="text" placeholder="Company Name" />
						<div className="err-msg">{company_err}</div>
					</div>

					<div className="input-container">
						<input name="phone" type="text" placeholder="Phone" />
						<div className="err-msg">{phone_err}</div>
					</div>

					<div className="input-container">
						<input name="email" type="text" placeholder="Email" />
						<div className="err-msg">{email_err}</div>
					</div>

					<div className="ra"><button className="submit-btn">Download now</button></div>
				</form>
			</div>
		</div>
	)
}
export const Contact = _Contact

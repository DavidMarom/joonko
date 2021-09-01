import React, { useState } from 'react'
import { productService } from '../services/productService'
import { DropDown } from '../cmps/DropDown'

const _Contact = () => {
	const [name_err, setName_err] = useState('');
	const [company_err, setComp_err] = useState('');
	const [phone_err, setPhone_err] = useState('');
	const [email_err, setEmail_err] = useState('');
	const [check_err, setCheck_err] = useState(false);
	const [check_stts, setCheck_stts] = useState(false);

	const toggleCheck = () => {
		setCheck_stts(!check_stts);
	}

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

		if (!check_stts) {
			setCheck_err('You must agree to the terms'); valid = false
		}
		else { setCheck_err('') }

		if (valid) {
			let formData = {
				name: ev.target.name.value,
				company_name: ev.target.company.value,
				email: ev.target.email.value,
				phone: ev.target.phone.value
			}

			let isEmployee = productService.sendFormData(formData);
			isEmployee.then((res, rej) => {
				if (res.id === 1) {
					let link = productService.getProducts(1)
					link.then((res, rej) => {
						window.open(res.link, '_blank').focus();
					})
				}
				else { window.location.href = "https://joonko.co/" }
			}).catch((error) => {
				alert(error);
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

				<DropDown />


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

					<div className="ra">
						<input type="checkbox" name="check" className="w20" onClick={toggleCheck} />
						<div className="cb">

							<p>I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes.

							</p>
							<div className="err-msg" >{check_err}</div>
						</div>

					</div>

				</form>
			</div>
		</div>
	)
}
export const Contact = _Contact

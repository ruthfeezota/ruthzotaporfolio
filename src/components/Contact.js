import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
	});

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [bname, setBname] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection("contact")
			.add({
				email: email,
				name: name,
				bname: bname,
				message: message,
				number: number,
			})

			.then(() => {
				alert("Form has be submitted 👍");
			})
			.catch((error) => {
				alert(error.message);
			});

		setEmail("");
		setName("");
		setBname("");
		setMessage("");
		setNumber("");
	};

	return (
		<main className="relative py-28 bg-gray-900" id="contact">
			<div
				className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8"
				data-aos="fade-up"
			>
				<div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
					{/* <h3 className="text-red-300 font-semibold">
                        Contact
                    </h3> */}
					<p className="text-white text-3xl font-semibold sm:text-4xl">
						Please contact me for new projects
					</p>
					<p className="text-white font-medium">
						Or email me directly: ruthzota@gmail.com
					</p>
				</div>
				<div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
					<form
						onSubmit={handleSubmit}
						className="space-y-5"
						data-aos="fade-up"
					>
						<div>
							<label className="font-medium">Full name</label>
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								required
								value={name}
								className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
							/>
						</div>
						<div>
							<label className="font-medium">Business Name</label>
							<input
								type="bname"
								onChange={(e) => setBname(e.target.value)}
								required
								value={bname}
								className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
							/>
						</div>

						<div>
							<label className="font-medium">
								Business Email
							</label>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								required
								value={email}
								className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg text-gray-900"
							/>
						</div>
						<div>
							<label className="font-medium">Phone number</label>
							<div className="relative mt-2">
								<div className="absolute mt-2 inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
									<select className="text-sm bg-transparent outline-none rounded-lg h-full">
										<option>US</option>
										<option>ES</option>
										<option>MR</option>
									</select>
								</div>
								<input
									type="number"
									onChange={(e) => setNumber(e.target.value)}
									required
									value={number}
									placeholder="+1 (555) 000-000"
									className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
								/>
							</div>
						</div>

						<div>
							<label className="font-medium">Message</label>
							<textarea
								type="text"
								onChange={(e) => setMessage(e.target.value)}
								required
								value={message}
								className="w-full mt-2 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Contact;

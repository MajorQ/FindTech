import { useState } from 'react';

const sendEmail = (body) => {
	window.open(
		`mailto:mohammadalfarisi6@gmail.com?subject=FindtechBug&body=My problem with this website is...${body}`
	);
};

const ContactUsForm = () => {
	const [body, setBody] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		sendEmail(body);
	};

	return (
		<div className="bg-white items-center md:rounded-3xl md:shadow-lg">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center items-center"
			>
				<h1 className=" my-5 font-bold text-3xl">
					<span className="text-black">Contact</span>
					<span className="text-accent "> Us</span>
				</h1>
				<div>
					<textarea
						onChange={(e) => setBody(e.target.value)}
						type="text"
						placeholder="Hello, I found a problem in..."
						className="ring ring-gray-100 rounded-md px-6 md:px-4 py-4 outline-none"
					/>
				</div>
				<button
					type="submit"
					className="bg-black w-1/2 font-bold rounded-tr-xl px-4 py-2 my-5 text-center"
				>
					<span className="px-1 text-sm text-white">Send to us </span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 inline-block stroke-current text-accent"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default ContactUsForm;

import React from 'react';
import {
	FaGithub,
	FaTwitter,
	FaEnvelope,
	FaPhone,
	FaBullhorn,
} from 'react-icons/fa';
// <i class="fa-solid fa-message-arrow-up-right"></i>

export default function Contact() {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');

	function encode(data) {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'test', name, email, message }),
		})
			.then(() => alert('Message sent!'))
			.catch(error => alert(error));
	}

	return (
		<section id="contact" className="relative">
			<div className="text-center mb-4 mt-10">
				<FaBullhorn className="text-4xl inline-block mb-4" />
				<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
					Get In Touch
				</h1>
			</div>
			<div className="container px-5 py-10 mx-auto flex flex-col gap-y-9 md:flex-row lg:gap-6">
				<form
					netlify
					name="test"
					onSubmit={handleSubmit}
					className="lg:w-1/3 md:w-1/2 md:order-last flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
				>
					<h2 className="text-white sm:text-3xl text-2xl mb-1 font-medium title-font">
						Hire Me
					</h2>
					<p className="leading-relaxed mb-2">
						Tell me a little about your project and I'll get back to you by the
						next business day.
					</p>
					<p className="text-sm italic mb-5">All fields required</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-400">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-400">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-400"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					>
						Submit
					</button>
				</form>
				<div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden lg:mr-10 p-10 relative">
					<div className="flex flex-wrap flex-col gap-y-6 lg:flex-row lg:justify-center lg:gap-x-6 p-2 w-full lg:text-xl">
						<div className="bg-gray-800 rounded flex-1 min-w-full lg:min-w-60 xl:min-w-40 h-full p-5">
							<a href="https://github.com/markjwood" target="_blank">
								<FaGithub className="text-gray-50 inline mr-4 text-2xl" /> My
								Github Projects
							</a>
						</div>
						<div className="bg-gray-800 rounded flex-1 min-w-full lg:min-w-60 xl:min-w-40 h-full p-5">
							<a href="https://twitter.com/markjasonwood" target="_blank">
								<FaTwitter className="text-gray-50 inline mr-4 text-2xl" />{' '}
								Follow me on Twitter
							</a>
						</div>
						<div className="bg-gray-800 rounded flex-1 min-w-full lg:min-w-60 xl:min-w-40 h-full p-5">
							<a href="mailto://mark@markjwood">
								<FaEnvelope className="text-gray-50 inline mr-4 text-2xl" />{' '}
								Email Me
							</a>
						</div>
						<div className="bg-gray-800 rounded flex-1 min-w-full lg:min-w-60 xl:min-w-40 h-full p-5">
							<div>
								<FaPhone className="text-gray-50 inline mr-4 text-2xl" /> Call
								Me:{' '}
								<span class="font-bold text-white ml-2">(855) 424-4552</span>
							</div>
						</div>
						{/* Add something here to fill space */}
					</div>
				</div>
			</div>
		</section>
	);
}

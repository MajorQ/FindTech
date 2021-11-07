const UserReviews = () => {
	return (
		<div className="w-screen flex flex-col items-center p-32">
			<h2 className="text-4xl text-left text-black font-bold tracking-tighter my-5">
				User Reviews
			</h2>
			<div className="w-1/4 h-1 bg-gradient-to-r from-yellow-400 to-black m-5"></div>
			<p className="max-w-sm text-center text-m font-bold text-gray-400 leading-relaxed mb-20">
				<span className="text-black">
					"Making decisions to pick a laptop is hard, as a non-tech person I
					don't really undertand gadget reviews. Finally
				</span>
				<span className="text-accent"> Findtech </span>
				<span className="text-black">
					helped me pick the best option for my needs!"
				</span>
			</p>
			<div className="grid grid-cols-3 gap-x-32">
				<UserBox
					backgroundColor="bg-white"
					textColor="text-black"
					userName="John Doe"
				/>
				<UserBox
					backgroundColor="bg-black"
					textColor="text-white"
					userName="Lara Madrigai"
				/>
				<UserBox
					backgroundColor="bg-white"
					textColor="text-black"
					userName="Jason Statham"
				/>
			</div>
		</div>
	);
};

const UserBox = ({ userName, backgroundColor, textColor }) => {
	return (
		<div className={`flex items-stretch ${backgroundColor} py-8 pl-8 pr-32`}>
			{/* Circle Avatar */}
			<div className="rounded-full bg-red-500 h-12 w-12 mx-4"></div>

			{/* Client Info */}
			<div className="flex flex-col justify-between">
				<p className={`${textColor} font-bold text-sm`}>{userName}</p>
				<p className="text-gray-400 text-sm">Client</p>
			</div>
		</div>
	);
};

export default UserReviews;

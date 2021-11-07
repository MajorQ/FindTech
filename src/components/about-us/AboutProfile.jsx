import kevin from '../../assets/images/kevin.png';
import arief from '../../assets/images/arief.png';
import aldo from '../../assets/images/aldo.png';
import salman from '../../assets/images/salman.png';
import farhan from '../../assets/images/Farhan.png';

const team1 = [
	{
		photo: kevin,
		name: 'Kevin Darmawan',
		role: 'UI/UX Designer',
		desc: 'I am an Undergraduate Student in computer engineering, used to work on mobile application design. I aspire to change the confusingly long decisions when buying a new computer into a user friendly and pleasantly aesthetic experience',
	},
	{
		photo: arief,
		name: 'Arief Saferman',
		role: 'Project Manager',
		desc: 'I am a computer engineering student who has desire in Website Development and Machine Learning, also have worked as a Supply Chain Assistant and currently an intern at a startup company that creates a superapp.',
	},
	{
		photo: aldo,
		name: 'Muhammad Alfi Aldolio',
		role: 'AI Engineer',
		desc: 'I am undergraduate student in university of Indonesia major in computer engineering who passionate in coding and playing with data',
	},
];

const team2 = [
	{
		photo: salman,
		name: 'Mohammad Salman Alfarisi',
		role: 'Software Engineer',
		desc: 'Previously worked on mobile application development and guided 500+ students as a Digital Lab Assistant in Universitas Indonesia',
	},
	{
		photo: farhan,
		name: 'Muhammad Farhan Almasyhur',
		role: 'Software Engineer',
		desc: 'An undergraduate student with experience in Mobile programming (Flutter) and CCNA. Previously worked as a mobile engineer in fintech startup and currently a laboratory assistant in Network Laboratory University of Indonesia',
	},
];

const AboutProfile = () => {
	return (
		<div className="w-screen bg-gray-100 py-20 px-10 ">
			<div className="grid grid-cols-3 my-10 gap-x-5">
				{team1.map((item) => {
					return (
						<div className="">
							<div className="">
								<img className="mx-auto" src={item.photo} alt={item.name}></img>
							</div>
							<div className=" w-9/12 mt-5 bg-white rounded-3xl py-10 px-10 mx-auto ">
								<h1 className=" font-extrabold text-3xl">{item.name}</h1>
								<div className=" mt-5 w-full h-0.5 bg-gray-200" />
								<h3 className="mt-3 font-extrabold text-xl ">{item.role}</h3>
								<p className="mt-3 text-gray-400">{item.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="grid grid-cols-2 justify-center my-10">
				{team2.map((item) => {
					return (
						<div className="">
							<div className="">
								<img className="mx-auto" src={item.photo} alt={item.name}></img>
							</div>
							<div className=" mx-auto w-6/12 mt-5 bg-white rounded-3xl py-10 px-10">
								<h1 className=" font-extrabold text-3xl">{item.name}</h1>
								<div className=" mt-5 w-full h-0.5 bg-gray-200" />
								<h3 className="mt-3 font-extrabold text-xl ">{item.role}</h3>
								<p className="mt-3 text-gray-400">{item.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AboutProfile;

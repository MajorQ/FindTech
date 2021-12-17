const FilterComponent = ({ title, items, onSelect }) => {
	return (
		<>
			<label htmlFor="select" className=" font-bold md:mx-5">
				{title}
			</label>
			<select name={title} className="font-bold rounded-xl" onChange={onSelect}>
				{items.map((item, index) => {
					return (
						<option
							value={index}
							className="bg-white"
							key={`Filter-${item.title}-${index}`}
						>
							{item.title}
						</option>
					);
				})}
			</select>
		</>
	);
};

export default FilterComponent;

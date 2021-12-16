const FilterComponent = ({ title, items, selectName, onSelect }) => {
	return (
		<>
			<label htmlFor="select" className=" font-bold md:mx-5">
				{title}
			</label>
			<select
				name={selectName}
				id=""
				className="font-bold  rounded-xl"
				onChange={onSelect}
			>
				{items.map((item, index) => {
					return (
						<option
							value={item}
							className="bg-white"
							key={`Filter-${item}-${index}`}
						>
							{item}
						</option>
					);
				})}
			</select>
		</>
	);
};

export default FilterComponent;

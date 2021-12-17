/**
 * Sets an object to read only, so its attributes or any nested object attributes
 * can't be changed.
 * @see https://stackoverflow.com/questions/56402309/is-there-an-easy-way-to-completely-freeze-object-and-its-children-in-javascript
 */
export default function deepFreeze(o) {
	Object.freeze(o);

	Object.getOwnPropertyNames(o).forEach(function (prop) {
		if (
			o.hasOwnProperty(prop) &&
			o[prop] !== null &&
			(typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
			!Object.isFrozen(o[prop])
		) {
			deepFreeze(o[prop]);
		}
	});

	return o;
}

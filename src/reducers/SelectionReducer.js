export default (state = null, action) => {
	const { type, payload } = action;
	switch(type) {
		case 'select_library':
			return payload;
		default:
			return state;
	}
}
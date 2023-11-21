// reducer.js
const initialState = {
	username: "",
	userSalonId: "",
	Id: "",
	// other state variables...
};

const setUserReducers = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USERNAME":
			return {
				...state,
				username: action.payload,
			};
		case "SET_USER_SALON_ID":
			return {
				...state,
				userSalonId: action.payload,
			};
		case "SET_ID":
			return {
				...state,
				Id: action.payload,
			};
		// other cases...
		default:
			return state;
	}
};

export default setUserReducers;

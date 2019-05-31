import { eventListModel } from "./model"

export const eventListReducer = (state = eventListModel, { type, payload }) => {
	switch (type) {
		case "UPDATE_EVENTS":
			return {
				...state,
				events: payload,
			}
		case "ADD_EVENT":
			return {
				...state,
				events: [...state.events, payload],
			}
		default:
			return state
	}
}

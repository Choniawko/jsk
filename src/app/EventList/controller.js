import { EventListView } from "./view"
import { store } from "../.."

const events = [
	{ id: 1, title: "Title #1", description: "Description #1" },
	{ id: 2, title: "Title #2", description: "Description #2" },
]

export const EventListController = () => {
	store.dispatch({ type: "UPDATE_EVENTS", payload: events })
	const view = EventListView()
	const updateList = () => {
		view.setEvents(store.getState().eventList.events)
	}

	return {
		updateList,
	}
}

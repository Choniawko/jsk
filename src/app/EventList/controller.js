import { EventListView } from "./view"
import { store } from "../.."

export const EventListController = () => {
	const { eventList: { events } } = store.getState()
	const view = EventListView()
	const updateList = () => {
		console.log(events)
		view.setEvents(events)
	}

	return {
		updateList,
	}
}

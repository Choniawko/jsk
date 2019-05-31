import { createStore, combineReducers } from "redux"
import { CalendarController } from "./app/Calendar/controller"
import { EventListController } from "./app/EventList/controller"
import { counterReducer } from "./app/Calendar/reducer"
import { eventListReducer } from "./app/EventList/reducer"

const render = () => {
	const calendarController = CalendarController()
	const eventListController = EventListController()
	calendarController.updateMonth()
	eventListController.updateList()
}

const rootReducer = combineReducers({
	calendar: counterReducer,
	eventList: eventListReducer,
})

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
)
render()
store.subscribe(render)

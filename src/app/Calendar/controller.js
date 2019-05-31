import { CalendarView } from "./view"
import { calendar } from "../../common/calendar"
import { store } from "../.."

export const CalendarController = () => {
	const { calendar: { year, month } } = store.getState()
	const view = CalendarView()
	const updateMonth = () => {
		view.setCalendar(calendar.monthDays(year, month))
	}

	return {
		updateMonth,
	}
}

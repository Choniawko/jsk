import { store } from "../.."

const calendar = document.querySelector("#calendar")
document.querySelector(".prev").addEventListener("click", () => {
	store.dispatch({ type: "DECREMENT" })
})
document.querySelector(".next").addEventListener("click", () => {
	store.dispatch({ type: "INCRENENT" })
})

const renderDay = day => `<div class="day">${day || ""}</div>`
const renderWeek = week =>
	`<div class="week"> ${week.map(renderDay).join("")}</div>`
const renderMonth = month =>
	`<div class="month">${month.map(renderWeek).join("")}</div>`

export const CalendarView = () => {
	const setCalendar = weeks => {
		calendar.innerHTML = renderMonth(weeks)
	}

	return {
		setCalendar,
	}
}

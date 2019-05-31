export const CalendarModel = {
	year: new Date().getFullYear(),
	month: new Date().getMonth(),
	days: [],
}

const day = {
	isSelected: false,
	eventsCount: 0,
}

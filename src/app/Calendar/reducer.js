import { CalendarModel } from "./model"

const incrementMonth = current => (current === 11 ? 0 : current + 1)
const decrementMonth = current => (current === 0 ? 11 : current - 1)
const incrementYear = (incMonth, currentYear) =>
	incMonth === 0 ? currentYear + 1 : currentYear
const decrementYear = (decMonth, currentYear) =>
	decMonth === 11 ? currentYear - 1 : currentYear

export const counterReducer = (state = CalendarModel, { type }) => {
	switch (type) {
		case "INCRENENT":
			return {
				...state,
				month: incrementMonth(state.month),
				year: incrementYear(incrementMonth(state.month), state.year),
			}
		case "DECREMENT":
			return {
				...state,
				month: decrementMonth(state.month),
				year: decrementYear(decrementMonth(state.month), state.year),
			}
		default:
			return state
	}
}

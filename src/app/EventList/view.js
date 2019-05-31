import { store } from "../.."

const eventList = document.querySelector("#event-list")

const renderEvent = event =>
	`<div class="event">
     <div class="title">${event.title}</div>
     <div class="title">${event.description}</div>
  </div>`

const renderEventList = events =>
	`<div class="events">${events
		.map(event => `<div>${renderEvent(event)}</div>`)
		.join("")}</div>`

export const EventListView = () => {
	const setEvents = events => {
		eventList.innerHTML = renderEventList(events)
	}

	return {
		setEvents,
	}
}

import { getCurrMonthArr, getLastDay } from "../index"

describe("calendar", () => {
  it("returns array of days", () => {
    // GIVEN
    const currYear = 2019
    const currMonth = 4
    // WHEN
    const weeks = getCurrMonthArr(currYear, currMonth)
    // THEN
    expect(weeks).toMatchSnapshot()
  })

  it("should return last day of the month", () => {
    // GIVEN
    const currYear = 2019
    const currMonth = 4
    const expectedDay = 31
    // WHEN
    const last = getLastDay(currYear, currMonth)
    // THEN
    expect(last).toEqual(expectedDay)
  })
})

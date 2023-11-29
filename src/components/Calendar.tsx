import React, { useRef, useState, useEffect } from 'react';
import moment, { max } from 'moment';

const daysofWeeks = ['月', '火', '水', '木', '金', '土', '日']
const holidays: any = {
	'10/09/2023': true,
	'11/03/2023': true,
	'11/23/2023': true,
	'01/01/2024': true,
	'01/08/2024': true,
}


function Calendar(props: { data: any, selectedItem: any }) {
	const calendarRef = useRef(null)
	const [indexExpand, setIndexExpand] = useState({})
	const { data, selectedItem } = props

	let minDate = moment();
	let maxDate = moment('01/01/2023');
	data.forEach((item: any) => {
		if (moment(item.from) < minDate) {
			minDate = moment(item.from)
		}
		if (moment(item.to) > maxDate) {
			maxDate = moment(item.to)
		}
		if (item.subtasks && item.subtasks.length > 0) {
			item.subtasks.forEach((subItem: any) => {
				if (moment(subItem.from) < minDate) {
					minDate = moment(subItem.from)
				}
				if (moment(subItem.to) > maxDate) {
					maxDate = moment(subItem.to)
				}
			})
		}
		minDate = moment('10/01/2023');
		maxDate = moment('01/31/2024');
	})

	function getRange(startDate: any, endDate: any, type: any) {
		console.log(startDate)
		let i = new Date(startDate)
		let range = [startDate]
		while (moment(i).format('MM/DD/YYYY') !== endDate) {
			let d = new Date(i)
			i = new Date(d.setDate(d.getDate() + 1))
			range.push(moment(i).format('MM/DD/YYYY'))
		}
		return range
	}

	const calendars = getRange(minDate.format('MM/DD/YYYY'), maxDate.format('MM/DD/YYYY'), 'days')
	setTimeout(() => {
		if (calendarRef && calendarRef.current && selectedItem) {
			(calendarRef?.current as any).scrollBy({
				top: 0,
				left: (calendars.indexOf(selectedItem.from)) * 51 - (calendarRef?.current as any).scrollLeft,
				behavior: 'smooth'
			})
		}

	}, 0)

	setTimeout(() => {
		const table = document.getElementById("mainTable");
		const calendar = document.getElementById("calendar");
		calendar?.addEventListener('scroll', (e) => {
			(table as any).scrollTop = (calendar as any).scrollTop
		})
	}, 0)

	useEffect(() => {


		return () => {
			if (calendarRef.current) {

			}
		}
	}, [calendarRef])
	return (
		<div id="calendar" ref={calendarRef} style={{ maxHeight: window.innerHeight - 50 }} className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className=" w-full text-sm text-left rtl:text-right text-gray-500 ">
				<thead className="z-50 sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-400">
					<tr className="h-16 dark:border-gray-300">
						{
							calendars.map((col: any) => (
								<th style={{ minWidth: '51px', padding: 0, backgroundColor: `${moment(col).isoWeekday() === 6 ? '#ffe5ea' : moment(col).isoWeekday() === 7 ? '#ECFFDC' : holidays[col] ? '#ADD8E6' : 'none'}` }} className="px-2 py-3">
									<div className="calendar-header">
										<span className="calendar-header__month">{moment(col).month() + 1}</span>
										<span className="calendar-header__day">{moment(col).date()}</span>
										<span className="calendar-header__week">{daysofWeeks[moment(col).isoWeekday() - 1]}</span>
									</div>

								</th>
							))
						}
					</tr>
				</thead>
				<tbody className="overflow-y-auto">
					{
						data.map((item: any, index: any) => (
							<tr className="border dark:border-gray-300 h-16 calendar-table__row">
								{
									calendars.map((ca: any) => (
										<td className="border dark:border-gray-300" style={{ minWidth: 50, padding: 0, backgroundColor: `${holidays[ca] || moment(ca).isoWeekday() === 6 || moment(ca).isoWeekday() === 7 ? '#E8E8E8' : 'none'}` }}></td>
									))
								}
								{
									item.from !== item.to && <div
										title={`from: ${item.from} - to: ${item.to}`} style={{
											left: calendars.indexOf(item.from) * 51 + 'px',
											width: (calendars.indexOf(item.to) + 1 - calendars.indexOf(item.from)) * 51
										}} className={`calendar-table__progress-bar calendar-table__progress-bar--${item.status === -1 ? 'danger' : item.status === 1 ? 'todo' : 'in'}`}></div>
								}
								{
									item.from == item.to &&
									<div title={`${item.from}`} style={{
										left: calendars.indexOf(item.from) * 51 + 'px',
									}} className={`calendar-table__milestone calendar-table__milestone--${item.status === -1 ? 'danger' : item.status === 1 ? 'todo' : 'in'}`}></div>
								}

							</tr>
						))
					}

				</tbody>
			</table>
		</div >

	);
}

export default Calendar;

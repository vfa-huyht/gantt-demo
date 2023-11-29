import React from 'react';
import PropTypes from 'prop-types';


function Table(props: { data: any, rowClick: any }) {
	const { data, rowClick } = props
	const column = ['', 'Assignee', 'Task', 'Detail', 'From', 'To']

	setTimeout(() => {
		const table = document.getElementById("mainTable");
		const calendar = document.getElementById("calendar");
		table?.addEventListener('scroll', (e) => {
			(calendar as any).scrollTop = (table as any).scrollTop
		})
	}, 0)
	return (
		<div id="mainTable" style={{ maxHeight: window.innerHeight - 50 }} className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
				<thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-400">
					<tr className="h-16 dark:border-gray-300">
						{
							column.map((col: any) => (
								<th scope="col" className="px-6 py-3">
									{col}
								</th>
							))
						}
					</tr>
				</thead>
				<tbody className="overflow-y-auto">
					{
						data.map((item: any) => (
							<tr className="h-16 border dark:border-gray-300" onClick={() => rowClick(item)}>
								<td className="px-6 py-4">

								</td>
								<td className="px-6 py-4">
									{item.name}
								</td>
								<td className="px-6 py-4">
									{item.task}
								</td>
								<td className="px-6 py-4">
									{item.detail}
								</td>
								<td className="px-6 py-4">
									{item.from}
								</td>
								<td className="px-6 py-4">
									{item.to}
								</td>
							</tr>
						))
					}

				</tbody>
			</table>
		</div>

	);
}

export default Table;

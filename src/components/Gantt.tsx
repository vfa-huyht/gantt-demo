import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import Calendar from './Calendar';

Gantt.propTypes = {

};

const data = [
	{
		name: 'John',
		from: '10/02/2023',
		to: '10/02/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/05/2023',
		to: '10/28/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/01/2023',
		to: '10/23/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/05/2023',
		to: '10/28/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/05/2023',
		to: '10/05/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '10/05/2023',
		to: '10/28/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/01/2023',
		to: '10/23/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/05/2023',
		to: '10/28/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/01/2023',
		to: '10/23/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/05/2023',
		to: '10/28/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/11/2023',
		to: '10/11/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/03/2023',
		to: '10/14/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '10/16/2023',
		to: '1/17/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '10/23/2023',
		to: '11/02/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 2
	},
	{
		name: 'John',
		from: '10/24/2023',
		to: '11/25/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '11/01/2023',
		to: '12/05/2023',
		task: '...',
		detail: '...',
		subtasks: [{
			name: 'John',
			from: '11/02/2023',
			to: '11/04/2023',
			task: '...',
			detail: '...',
			subtasks: [],
			status: 0
		},
		{
			name: 'John',
			from: '11/04/2023',
			to: '12/05/2023',
			task: '...',
			detail: '...',
			subtasks: [],
			status: 0
		}],
		status: 0
	},
	{
		name: 'John',
		from: '11/06/2023',
		to: '11/12/2023',
		task: '...',
		detail: '...',
		subtasks: [{
			name: 'John',
			from: '11/06/2023',
			to: '11/08/2023',
			task: '...',
			detail: '...',
			subtasks: [],
			status: 0
		},
		{
			name: 'John',
			from: '11/08/2023',
			to: '11/09/2023',
			task: '...',
			detail: '...',
			subtasks: [],
			status: 0
		}, {
			name: 'John',
			from: '11/09/2023',
			to: '11/12/2023',
			task: '...',
			detail: '...',
			subtasks: [],
			status: 0
		}],
		status: 0
	},
	{
		name: 'John',
		from: '11/01/2023',
		to: '11/11/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '11/23/2023',
		to: '11/28/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '11/29/2023',
		to: '11/30/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},
	{
		name: 'John',
		from: '12/03/2023',
		to: '12/09/2023',
		task: '...',
		detail: '...',
		subtasks: []
	},
	{
		name: 'John',
		from: '12/07/2023',
		to: '12/14/2023',
		task: '...',
		detail: '...',
		subtasks: [],
		status: 1
	},


]

function Gantt() {
	const [selectedItem, setselectedItem] = useState()
	const getRow = (item: any) => {
		setselectedItem(item)
	}
	return (
		<div>
			<div className="grid grid-cols-2 p-5">
				<div className="px-2">
					<Table rowClick={getRow} data={data}></Table>
				</div>
				<div className="px-2">
					<Calendar selectedItem={selectedItem} data={data}></Calendar>
				</div>
			</div>
		</div>
	);
}

export default Gantt;

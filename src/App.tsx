import React from 'react'
import Gantt from './components/Gantt'

function App() {

	return (
		<React.Suspense fallback={null}>
			<Gantt></Gantt>

		</React.Suspense>
	)
}

export default App

import React from 'react'
import Router from './router/Router'
import { useSetRecoilState } from 'recoil'

function App() {

	return (
		<React.Suspense fallback={null}>
			<div>test</div>
		</React.Suspense>
	)
}

export default App

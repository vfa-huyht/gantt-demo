import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
	component: ReactNode
	layout?: FC<{ children: ReactNode }>
	path: string
	isAuthen: boolean | undefined
}
const Middleware: FC<Props> = props => {
	const { component: Component, layout: Layout, isAuthen, path } = props
	console.log('path:', path)
	// todo: get accesstoken
	const isLoggedIn: string | null = 'Bearer ...'

	if (!isLoggedIn && isAuthen) {
		return <Navigate to='/' />
	}

	return Layout ? <Layout>{Component}</Layout> : <React.Fragment>{Component}</React.Fragment>
}

export default Middleware

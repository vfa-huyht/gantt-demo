import { FC, ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

export type TCustomRoute = RouteObject & {
	meta: {
		layout?: FC<{ children: ReactNode }>
		isAuthen: boolean
	}
}

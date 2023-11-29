import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: 'REACT_APP_',
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 3000,
		open: true,
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				implementation: sass
			}
		}
	}
})

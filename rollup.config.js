import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
	input: 'src/index.js',
	output: {
		format: 'esm',
		file: 'dist/rolluped.js'
	},
	plugins: [nodeResolve(), commonjs()]
}

import path from 'path'
import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'

const pkg = require(path.resolve(__dirname, './package.json'))

const deps = Object.keys(pkg.dependencies || {})
const devDeps = Object.keys(pkg.devDependencies || {})

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [...deps, ...devDeps, 'node:path', 'node:fs'],
      plugins: [terser()],
    },
  },
  plugins: [
    dts({
      entryRoot: './src',
    }),
  ],
}
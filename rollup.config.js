import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import run from '@rollup/plugin-run';
import {terser} from 'rollup-plugin-terser';

const extensions = ['.js', '.ts'];

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/app.ts',
  output: {
      dir: 'dist',
      format: 'esm',
      name: '<your project name>'
  },
  
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],
}

const isWatching = process.env.ROLLUP_WATCH === 'true';
const isDevelopment = process.env.NODE_ENV === 'development';

if(isDevelopment) {
  config.plugins = [
    ...config.plugins,
    isWatching && run({})
  ];
}

if (!isDevelopment) {
  config.plugins = [
    ...config.plugins,
    terser({}),
  ];
}

export default config;
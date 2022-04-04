import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

fs.rmSync('./dist', { recursive: true, force: true });

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'lib/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
  },
  external: id => !/^[./]/.test(id),
  plugins: [
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
  ],
};

export default config;

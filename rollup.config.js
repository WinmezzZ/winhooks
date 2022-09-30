import ts from 'rollup-plugin-ts';
import fs from 'fs';

fs.rmSync('./dist', { recursive: true, force: true });

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'lib/index.ts',
  output: [
    {
      dir: 'es',
      format: 'es',
      preserveModules: true,
    },
    {
      dir: 'cjs',
      format: 'cjs',
      preserveModules: true,
      exports: 'named',
    },
  ],
  external: id => !/^[./]/.test(id),
  plugins: [
    ts({
      tsconfig: './tsconfig.rollup.json',
    }),
  ],
};

export default config;

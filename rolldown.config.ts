import { defineConfig } from 'rolldown';

export default defineConfig([
    {
        input: 'packages/roosterjs/lib/index.ts',
        tsconfig: './packages/tsconfig.json',
        output: {
            file: 'dist/roosterjs.js',
            format: 'esm',
            sourcemap: true,
            minify: false,
        },
        platform: 'browser',
        shimMissingExports: true,
    },
    {
        input: 'packages/roosterjs/lib/index.ts',
        tsconfig: './packages/tsconfig.json',
        output: {
            file: 'dist/roosterjs.min.js',
            format: 'esm',
            sourcemap: true,
            minify: true,
        },
        platform: 'browser',
        shimMissingExports: true,
    },
]);

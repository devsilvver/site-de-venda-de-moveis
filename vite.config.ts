import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      resolve: {
        alias: {
          // Fix: `__dirname` is not available in all module systems. Using `process.cwd()` is a reliable alternative for pointing to the project root.
          '@': path.resolve(process.cwd(), '.'),
        }
      }
    };
});

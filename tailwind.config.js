import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

export default {
  content: [
    resolvePath('./index.html'),
    resolvePath('./src/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

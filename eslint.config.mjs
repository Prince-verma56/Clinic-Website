import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  
  // FIX: यह ऑब्जेक्ट 'react/no-unescaped-entities' rule को disable करता है,
  // जिससे JSX में सीधे ' (apostrophe) का इस्तेमाल करने पर Vercel build fail नहीं होगी।
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;

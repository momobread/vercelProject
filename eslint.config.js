import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "eslint:recommended",
      // eslint 핵심규칙 활성화
      "plugin:prettier/recommended",
      //lint와 prettier가 충돌되지 않도록 | prettier 공식 플러그인
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/prop-types": "off",
      "typescript-eslint/no-unused-vars": "off", // 안쓰는 변수 에러 빨간줄 끄기
      "prettier/prettier": ["error", {}],
    },
  }
);

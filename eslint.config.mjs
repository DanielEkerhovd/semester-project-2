import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  languageOptions: {
    globals: globals.browser,
  },
  extends: [pluginJs.configs.recommended],
  ignorePatterns: ["tailwind.config.js"], // Add this line to ignore the file
};

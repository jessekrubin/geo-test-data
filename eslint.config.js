// @ts-check
import jsse from "@jsse/eslint-config";
import * as parserJsonc from "jsonc-eslint-parser";

export default jsse(
  {
    /**
     * ===================
     * jsse eslint options
     * ===================
     */
    debug: false,

    /**
     * Enable TypeScript support.
     */
    // typescript: {
    //     tsconfig: "tsconfig.json", // or ["tsconfig.json", "tsconfig.eslint.json", ...]
    // },

    /**
     * Enable React support.
     * @default false
     */
    // react: true,
    // reactRefresh: true,

    /**
     * Report unused disable directives
     * @default true
     */
    // reportUnusedDisableDirectives: false,

    /**
     * rules 2 turn off
     * @default []
     * @example ["super-annoying-rule"]
     */
    // off: [],
  },

  {
    files: ["geojson/ok/**/*.geojson"],

    languageOptions: { parser: parserJsonc },
    rules: {
      // sort geojson via jsonc/sort-keys
      "jsonc/sort-keys": [
        "error",
        {
          order: [
            "type",
            "id",
            "name",
            "crs",
            "bbox",
            "properties",
            "features",
            "geometry",
            { keyPattern: ".*", order: { type: "asc" } },
          ],
          pathPattern: ".*",
        },
      ],
    },
  },
);

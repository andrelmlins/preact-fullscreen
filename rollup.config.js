import preact from "rollup-plugin-preact";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/dev/index.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/bundle.js"
    },
    plugins: [
      preact({ dev: !production }),
      resolve({ browser: true }),
      commonjs(),
      !production && serve(),
      !production && livereload("public"),
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: "src/lib/index.js",
    output: { file: pkg.main, format: "umd", name: "ResizeObserver" },
    plugins: [preact(), resolve(), commonjs()]
  },
  {
    input: "src/lib/index.js",
    output: { file: pkg.module, format: "es" },
    plugins: [preact(), commonjs()]
  }
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}

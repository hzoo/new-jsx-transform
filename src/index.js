import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

const INPUT = [
  [
    `// runtime "automatic" adds imports, will be default in Babel 8
// importSource defaults to "react"

<div></div>;
<h1>hi</h1>;
<Component {...props} />;
const profile = (
  <>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(" ")}</h3>
  </>
);`,
    {
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "automatic", // "runtime" | "classic"
            importSource: "react", // default to "react"
          },
        ],
      ],
    },
  ],
  [
    `import React from "react";
// runtime "classic" is default in Babel 7
// pragma defaults to "React.createElement"

<div></div>;
<h1>hi</h1>;
<Component {...props} />;
const profile = (
  <>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(" ")}</h3>
  </>
);`,
    {
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "classic",
            pragma: "React.createElement",
            pragmaFrag: "React.Fragment",
          },
        ],
      ],
    },
  ],
];
const PLUGIN = `export default function customPlugin(babel) {
  return {
    manipulateOptions(opts, parserOpts) {
      // parserOpts.localizedKeywords = {
      //   if: "如果",
      // };
    }
  };
}
`;

render(
  <App defaultInput={INPUT} defCustomPlugin={PLUGIN} />,
  document.getElementById("root")
);

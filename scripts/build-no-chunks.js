// https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838
// I am including this so that when we build, we get a single, "main.xxxx.js" file
// in our build, which we can include in website.

const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");
let config = defaults.__get__("config");

module.exports = function override(config) {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };
  return config;
};
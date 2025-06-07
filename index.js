const core = require("@actions/core");
const { run } = require("workspace-lcov-aggregate");

run()
  .then(() => {})
  .catch((err) => {
    core.setFailed(err.message);
  });

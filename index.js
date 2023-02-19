const fs = require('fs');
const core = require('@actions/core');

try {
  const file = core.getInput('file') || 'build.gradle';
  const bg = fs.readFileSync(file).toString();

  let version = 'latest';

  bg.split("\n").forEach((r) => {
    if (r.startsWith("version=") || r.startsWith("version =")) {
      version = r.replace(/(version|=|"| )/g, "");
    }
  });

  core.exportVariable("VERSION", version);
} catch (error) {
  core.setFailed(error.message);
}

# Get gradle version action
*(a fork of get npm version action: https://github.com/thecodemonkey/action-get-npm-version)*

<br/><br/>

extracts the version string from the build.gradle file


<br/><br/>

# Example usage

```yaml

name: GET GRADLE VERSION

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.version.outputs.version }}              # <- put the version to output of the current job
    steps:                                                       #    to share the version between different jobs
      - uses: actions/checkout@v2



      - uses: EmberCM/action-get-gradle-version@master     # <- USE THIS ACTION TO READ THE VERSION FROM BUILD.GRADLE
        id: version                                              # <- give this step an id to access the output of the step




      - run: 'echo version ${{ steps.version.outputs.version }}' # <- access the version

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - run: 'echo version ${{needs.build.outputs.version}}'     # <- access the version in another job

```

<br/><br/>

## Inputs

### `file`

**Optional** The build.gradle file. Default `"build.gradle"`.

use this input parameter if the build.gradle file is in a different directory.

```yaml

  - uses: EmberCM/action-get-gradle-version@master
    with:
      file: module/subfolder/build.gradle

```

<br/><br/>

## Outputs

### `version`

the version inside build.gradle file. You have to give the step an id to access the output.

```yaml

  - uses: EmberCM/action-get-gradle-version@master
    id: getversion
  - run: 'echo version ${{ steps.getversion.outputs.version }}'

```

<br/><br/>

# License

The scripts and documentation in this project are released under the MIT License

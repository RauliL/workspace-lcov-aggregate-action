# LCOV code coverage aggregator for monorepos GitHub action

[GitHub action] which executes [workspace-lcov-aggregate].

[GitHub action]: https://docs.github.com/en/actions
[workspace-lcov-aggregate]: https://www.npmjs.com/package/workspace-lcov-aggregate

## Usage example

This example runs `npm run test:coverage` at the root of an monorepo, then
aggregates LCOV results from all packages into single file and finally pushes
the result into [Coveralls].

[Coveralls]: https://coveralls.io

```yaml
on: ["push", "pull_request"]

name: Test

jobs:

  build:
    name: Build
    runs-on: ubuntu-latest
    steps:

    - uses: actions/checkout@v1

    - name: Use Node.js 24.x
      uses: actions/setup-node@v1
      with:
        node-version: 24.x

    - name: npm install, npm run test:coverage
      run: |
        npm install
        npm run test:coverage

    - name: Aggregate LCOV results
      uses: RauliL/workspace-lcov-aggregate-action@main

    - name: Coveralls
      uses: coverallsapp/github-action@master
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
```

# Goals

### Main goals
There were 3 main ideas for creation of Protractor framework:
- to get insight of Protractor Control Flow
- to work in collaboration with coworkers to introduce them into `git` workflow and actions connected with Pull Requests
- to get practice with popular JS libraries `lodash` and `moment`

### Side goals
Beside main goals I wanted to do what is not in my responsibilities on the project:
- setup of ESlint
- setup of CLI reporter
- setup of HTML reporter
- setup of PR template

### Weird stuff
There is a bunch of first commits which look really sad, but they are here for purpose. The purpose is simple - 
practicing with `git` commands and Pull Requests:
- `merge`
- `revert` and `reset`
- `diff`
- `rebase`
- `cherry-pick`  

### TODO
Framework does not look 100% complete and there is a couple ideas I'd like to bring in.
Due to lack of free time and a kind of difficulties at the current project, so for next Performance review
I'd like to complete:

- get rid of `promises` and update syntax to ES6 to use `async / await`
- setup parallelization for running of test suites
- setup headless mode for test runs
- setup aliases with `babel`
- setup ES6 `import / export`

## Test Scenarios
The initial idea was to create 100 test cases in collaboration with coworkers. But as always there were circumstances
interfering to do what has been planned - so I had to everything on my own. And I've decided to reduce number of
scenarios to 25. The quality and ideas of test cases are various form case to case.

## Installation

Clone repo to local machine with
```webdriver-manager```

`cd` cloned repo and run
```npm install```

## Usage

Update `webdriver-manager` and start server with
```npm run webdriver```

To run all tests
```npm run full```

To run suites jump into package.json to get suite-name and
```npm run <suite-name>```

## Reporting
HTML report is ready for you after each run in `./reports` as `report.html`

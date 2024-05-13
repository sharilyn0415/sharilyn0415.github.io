# sharilyn0415.github.io

The is a web application that demonstrates the use of a custom Finite State Machine (FSM) library to track the progress of a multi-step form. The application provides a visual representation of the form's current state and allows users to navigate between different stages of the form seamlessly.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- npm installed on your local machine
- Node.js installed on your local machine
- Git installed on your local machine

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/sharilyn0415/sharilyn0415.github.io.git
```

2. Navigate to the project directory, and Install dependencies:

```bash
   npm install
```

## Usage

To start the development server, run:

```bash
   npm start
```

This will start the server at http://localhost:3000.

To build the project, run:

```bash
   npm run build
```

## Tests

Tests are written using the [Nemo](https://nemo.js.org/) test framework.

1.  Pre-requisites

- You are using a Mac, and already have node 8+/npm 6+ set up
- Have a local node/npm project you wish to functionally test
- Have a recent (generally the latest) version of the Chrome and Firefox browser installed

2.  To run tests, use:

```bash
   npm run test
```

## Deployment

This app is using [github pages](https://pages.github.com/) for deployment. For deployment, make sure you have all your changes readay on `gh-pages` branch.

1. Make sure you have your changes build, run:

```bash
   npm run predeploy
```

2. Trigger deployment, run:

```bash
   npm run deploy
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change. Please make sure to update tests as appropriate.
custom

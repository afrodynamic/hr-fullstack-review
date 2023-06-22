# GitHub Finder

## Table of Contents

* [GitHub Finder](#github-finder)
  * [Table of Contents](#table-of-contents)
  * [Description](#description)
  * [Usage](#usage)
    * [Requirements](#requirements)
    * [Setup and Running](#setup-and-running)

## Description

This project is for Hack Reactor's "Full Stack Review" assignment. The project is a Full Stack application (React, Express) which allows users to search for any users' GitHub repositories and store information about them from the GitHub API. The top 25 most popular repositories by star count are displayed on the home page.

Features include:

* Search for any GitHub user's repositories
* View information about stored GitHub repositories
* View the count of stored GitHub repositories

## Usage

### Requirements

You will need the following dependencies to run this project:

* `node` / `npm`, to manage project dependencies ([download](https://nodejs.org/en/download))
* `git`, for cloning the project ([download](https://git-scm.com/downloads))
* A GitHub account, for using the GitHub API ([sign up](https://github.com/signup))
* A GitHub Personal Access Token, for using the GitHub API

  * Login to your GitHub account and then create a new Token ([create token](https://github.com/settings/tokens/new?scopes=repo&description=GitHub%20Finder))
  * Add the token to a `config.js` file at the root of the project or rename the `config.example.js` file to `config.js` and add your token there
    * Include your token in the `config.js` file as such:

      ```javascript
      const TOKEN = 'ghp_YOUR_TOKEN_HERE';

      module.exports = TOKEN;
      ```

### Setup and Running

To run this project, please follow these steps:

1. Clone the repository to your local machine

   ```shell
   git clone https://github.com/afrodynamic/hr-fullstack-review.git
   ```

2. Navigate to the cloned repository directory

   ```shell
   cd fullstack-review
   ```

3. Install the project's dependencies using `npm install` in the root of the project directory

   ```shell
   npm install
   ```

4. Either run both the client/server together with `npm start`

   ```shell
   npm start
   ```

   or run the client/frontend using `npm run client-dev`

   ```shell
   npm run client-dev
   ```

   and run the server/backend using `npm run server-dev`

   ```shell
   npm run server-dev
   ```

5. Open a browser and navigate to <http://localhost:1128> to view the running project

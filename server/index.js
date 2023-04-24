const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getReposByUsername} = require('../helpers/github.js');
const { Repo, save } = require('../database/index.js');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

app.post('/repos', async(request, response)=> {
  console.log('POST request received');
  console.log(request.body);

  const username = request?.body?.username;

  if (!username) {
    response.status(400).send('Bad request');
    return;
  }

  const repos = await getReposByUsername(username);
  save(repos);

  Repo.find({})
    .sort({ stargazers_count: -1 })
    .then((repos) => {
      response.status(201).json(repos);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).send('Internal server error');
    });
});

app.get('/repos', async(request, response) => {
  console.log('GET request received');

  Repo.find({})
    .sort({ stargazers_count: -1 })
    .limit(25)
    .then((repos) => {
      response.status(200).json(repos);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).send('Internal server error');
    });
});

const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

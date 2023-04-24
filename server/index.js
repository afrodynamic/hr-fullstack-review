const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getReposByUsername} = require('../helpers/github.js');
const { save } = require('../database/index.js');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

app.post('/repos', async(request, response)=> {
  console.log('POST request received');

  const username = request?.body?.username;

  if (!username) {
    response.status(400).send('Bad request');
    return;
  }

  const repos = await getReposByUsername(username);
  save(repos);

  response.status(201).send('Repos saved to database');
});

app.get('/repos', (request, response) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

const port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const ownerSchema = mongoose.Schema({
  login: String,
  id: Number,
  avatar_url: String,
  url: String,
  type: String
});

const repoSchema = mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  name: String,
  owner: ownerSchema,
  html_url: String,
  description: String,
  fork: Boolean,
  forks_count: Number,
  stargazers_count: Number,
  watchers_count: Number,
  open_issues_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  Repo.insertMany(repos)
    .then(() => console.log('Repos saved to database'))
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { Repo, save };

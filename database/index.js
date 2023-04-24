const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  owner: {
    login: String,
    id: Number,
    avatar_url: String,
    url: String,
    type: String
  },
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

module.exports.save = save;

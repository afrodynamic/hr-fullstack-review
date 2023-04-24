const axios = require('axios');
const TOKEN = process.env.GITHUB_API_TOKEN || require('../config.js');

const getReposByUsername = async(username) => {
  const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  try {
    const response = await github.get(`/users/${username}/repos`);

    return response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      owner: {
        login: repo.owner.login,
        id: repo.owner.id,
        avatar_url: repo.owner.avatar_url,
        url: repo.owner.url,
        type: repo.owner.type
      },
      html_url: repo.html_url,
      description: repo.description,
      fork: repo.fork,
      forks_count: repo.forks_count,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      open_issues_count: repo.open_issues_count
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports.getReposByUsername = getReposByUsername;

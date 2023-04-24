import React from 'react';

const RepoList = ({ repos, topRepos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.

    <h4> Top 25 Repos </h4>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Description</th>
          <th>Stars</th>
          <th>Forks</th>
          <th>Open Issues</th>
        </tr>
      </thead>
      <tbody>
        {topRepos.map((repo) => (
          <tr key={repo.id}>
            <td><a href={repo.html_url}>{repo.name}</a></td>
            <td><a href={repo.owner.url}>{repo.owner.login}</a></td>
            <td>{repo.description}</td>
            <td>{repo.stargazers_count}</td>
            <td>{repo.forks_count}</td>
            <td>{repo.open_issues_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RepoList;

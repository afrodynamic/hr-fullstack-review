import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import RepoList from './components/RepoList.jsx';
import Search from './components/Search.jsx';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [topRepos, setTopRepos] = useState([]);

  useEffect(() => {
    $.ajax({
      url: '/repos',
      method: 'GET',
      success: (data) => {
        setRepos(data);
        setTopRepos(data.slice(0, 25));
      },
      error: (error) => {
        console.log('Error: ', error);
      }
    });
  }, []);

  const search = (term) => {
    $.ajax({
      url: '/repos',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ username: term }),
      success: (data) => {
        const uniqueRepos = data.filter((repo) => {
          return !repos.some((existingRepo) => {
            return existingRepo.id === repo.id;
          });
        });

        setRepos([...repos, ...uniqueRepos]);
        setTopRepos(repos.slice(0, 25));
      },
      error: (error) => {
        console.log('Error: ', error);
      }
    });
  };

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos} topRepos={topRepos} />
      <Search onSearch={search}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

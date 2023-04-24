import $ from 'jquery';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import RepoList from './components/RepoList.jsx';
import Search from './components/Search.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { username: term },
      success: (data) => {
        setRepos(data);
      },
      error: (error) => {
        console.log('Error: ', error);
      }
    });
  };

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

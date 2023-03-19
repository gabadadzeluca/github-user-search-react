import './App.css';
import { useState } from 'react';
import HeaderComponent from './components/header/heading/HeaderComponent';
import SearchComponent from './components/header/search/SearchComponent';
import UserContainerComponent from './components/user/container/UserContainerComponent';
import GitHubData from './components/header/GitHubData';

function App() {
  const[data, setData] = useState<GitHubData>({
    avatar_url: "",
    login: "",
    created_at: "",
    followers: 0,
    following: 0,
    bio: null,
    location: null,
    twitter_username: null,
    blog: "",
    name: "",
    public_repos: 0,
    company: null
  });
  const[darkMode, setDarkMode] = useState<boolean>(false);
  const updateData = (value:GitHubData) => {
    setData(value);
  }

  return (
    <div className='App'>
      <div className='container'>
        <HeaderComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
        <SearchComponent updateData={updateData} />
        <UserContainerComponent data={data}/>
      </div>
    </div>
  );
}

export default App;

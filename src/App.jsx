import React from 'react';
import './App.scss';
import './components/Sidebar/Sidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;

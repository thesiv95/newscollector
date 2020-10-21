import React from 'react';
import './styles/bootstrap.min.css';
import './styles/custom.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Main />
    </div>
  );
}

export default App;

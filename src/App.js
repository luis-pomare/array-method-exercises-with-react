import './styles/App.css';
import Header from './components/header';
import Main from './components/main';
import data from './store.js';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(data);
  const { companies, ages } = state;
  const clickHandler = () => {
    setState({ ...state, method: 'none' });
  };
  return (
    <div className='App'>
      <Header
        onClick={() => {
          clickHandler();
        }}
      />
      <Main companies={companies} ages={ages} />
    </div>
  );
}

export default App;

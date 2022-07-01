import './styles/App.css';
import Header from './components/header';
import Main from './components/main';
import data from './store.js';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(data);

  const clickHandler = (method) => {
    setState({ ...state, method: method });
    console.log(state);
  };

  return (
    <div className='App'>
      <Header
        onClick={() => {
          clickHandler('none');
        }}
      />
      <Main state={state} />
    </div>
  );
}

export default App;

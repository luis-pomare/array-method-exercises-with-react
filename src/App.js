import './styles/App.css';
import Header from './components/header';
import Main from './components/main';
import data from './store.js';

function App() {
  const { companies, ages } = data;
  return (
    <div className='App'>
      <Header />
      <Main companies={companies} ages={ages} />
    </div>
  );
}

export default App;

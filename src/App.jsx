import './App.css';
import DiemsInfo from './Components/About/DiemsInfo';
import Header from './Components/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
    <Header/>
      <Home />
      <DiemsInfo/>
    </div>
  );
}

export default App;

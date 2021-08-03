import Header from './components/Header'
import Home from './components/Home'
import './app.css'
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

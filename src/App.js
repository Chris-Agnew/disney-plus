import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
